import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App.tsx';
import Header from './utils/Header.tsx';
import { WebView } from 'react-native-webview';
import { firebase } from '@react-native-firebase/firestore';
import Geolocation from '@react-native-community/geolocation';

type ExchangeRate = {
  currency: string;
  buyValue: number;
  sellValue: number;
  imageName?: string;
};

type ExchangeOffice = {
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  exchangeRates: ExchangeRate[];
};

type LatLng = {
  latitude: number;
  longitude: number;
};

const Map_screen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {
  const [exchangeOffices, setExchangeOffices] = useState<ExchangeOffice[]>([]);
  const [userLocation, setUserLocation] = useState<LatLng | null>(null);
  const [selectedOfficeLocation, setSelectedOfficeLocation] = useState<LatLng | null>(null);

  useEffect(() => {
    const fetchExchangeOffices = async () => {
      try {
        const querySnapshot = await firebase.firestore().collection('exchange_offices').get();
        const offices = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as ExchangeOffice[];
        setExchangeOffices(offices);
      } catch (error) {
        console.error('Error fetching exchange offices:', error);
      }
    };

    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'We need your location to show it on the map',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('Permission denied', 'Location permission is required to show your position on the map.');
          return;
        }
      }
      Geolocation.getCurrentPosition(
        (position: any) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error: any) => {
          console.log('Geolocation error:', error.message);
          Alert.alert('Error', 'Failed to get your location');
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    };

    fetchExchangeOffices();
    requestLocationPermission();
  }, []);

  const generateMapHtml = (
    offices: ExchangeOffice[],
    userLoc: LatLng | null,
    selectedLoc: LatLng | null
  ) => {
    const formatWorkingHours = (office: any) => {
      const days = [
        { key1: 'monday1', key2: 'monday2', name: 'Mon' },
        { key1: 'tuesday1', key2: 'tuesday2', name: 'Tue' },
        { key1: 'wednsday1', key2: 'wednsday2', name: 'Wed' },
        { key1: 'thursday1', key2: 'thursday2', name: 'Thu' },
        { key1: 'friday1', key2: 'friday2', name: 'Fri' },
        { key1: 'saturday1', key2: 'saturday2', name: 'Sat' },
        { key1: 'sunday1', key2: 'sunday2', name: 'Sun' },
      ];

      const hourMap: Record<string, string[]> = {};

      days.forEach(({ key1, key2, name }) => {
        const start = office[key1];
        const end = office[key2];
        let label = '';

        if (
          !start ||
          !end ||
          start.toLowerCase() === 'closed' ||
          end.toLowerCase() === 'closed'
        ) {
          label = 'Closed';
        } else {
          label = `${start}:00 - ${end}:00`;
        }

        if (!hourMap[label]) {
          hourMap[label] = [];
        }
        hourMap[label].push(name);
      });

      const tableRows = Object.entries(hourMap).map(([hours, days]) => {
        const dayRange = days.join(', ');
        return `<tr><td>${dayRange}</td><td>${hours}</td></tr>`;
      });

      return `
        <table border="1" style="width: 100%; font-size: 28px;">
          <thead><tr><th>Days</th><th>Working Hours</th></tr></thead>
          <tbody>${tableRows.join('')}</tbody>
        </table>
      `;
    };

    const markersJs = offices
      .map((office) => {
        const ratesHtml =
          office.exchangeRates
            ?.map(
              (rate) => `
          <tr>
            <td>${rate.currency}</td>
            <td>${rate.buyValue}</td>
            <td>${rate.sellValue}</td>
          </tr>
        `
            )
            .join('') ?? '';

        return `
      (function() {
        const marker = L.marker([${office.latitude}, ${office.longitude}], {
          icon: L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            iconSize: [60, 80],
            iconAnchor: [20, 60],
            popupAnchor: [0, -60],
          })
        }).addTo(map);

        const popupContent = \`
          <div style="width: 300px; font-size: 32px; z-index: 10000;">
            <strong>${office.name}</strong><br/>
            <em>${office.description}</em><br/>
            <p><strong>Location:</strong> ${office.location}</p>
            <p><strong>Email:</strong> ${office.email}</p>
            <p><strong>Phone:</strong> ${office.phone}</p>
            <p><strong>Working Hours:</strong></p>
            <div style="margin-top: 10px;">${formatWorkingHours(office)}</div>
            <p><strong>Exchange Rates:</strong></p>
            <table border="1" style="width: 100%; font-size: 32px;">
              <thead><tr><th>Currency</th><th>Buy</th><th>Sell</th></tr></thead>
              <tbody>${ratesHtml}</tbody>
            </table>
          </div>
        \`;

        marker.bindPopup(popupContent);

        marker.on('popupopen', () => {
          window.ReactNativeWebView.postMessage(JSON.stringify({ lat: ${office.latitude}, lng: ${office.longitude} }));
        });

        marker.on('popupclose', () => {
          window.ReactNativeWebView.postMessage(JSON.stringify({ cancel: true }));
        });
      })();
    `;
      })
      .join('\n');

    const userMarkerJs = userLoc
      ? `
    const userMarker = L.circleMarker([${userLoc.latitude}, ${userLoc.longitude}], {
      radius: 20,
      color: '#2A81CB',
      fillColor: '#2A81CB',
      fillOpacity: 0.8,
      interactive: false
    }).addTo(map);
    userMarker.bindPopup('<div style="font-size: 32px;">Your current location</div>', { closeButton: false }).openPopup();
  `
      : '';

    // Routing lines code unchanged
    const routeJs =
      userLoc && selectedLoc
        ? `
    if (window.routeLine) {
      map.removeLayer(window.routeLine);
    }
    window.routeLine = L.polyline([
      [${userLoc.latitude}, ${userLoc.longitude}],
      [${selectedLoc.latitude}, ${selectedLoc.longitude}]
    ], { color: 'red', weight: 4 }).addTo(map);
    window.selectedLatLng = { lat: ${selectedLoc.latitude}, lng: ${selectedLoc.longitude} };

    map.eachLayer(layer => {
      if (layer.getLatLng && layer.getLatLng().lat === ${selectedLoc.latitude} && layer.getLatLng().lng === ${selectedLoc.longitude}) {
        layer.openPopup();
      }
    });
  `
        : `
    if (window.routeLine) {
      map.removeLayer(window.routeLine);
      window.routeLine = null;
    }
    window.selectedLatLng = null;
  `;

    // Recenter control button
    const recenterControlJs = userLoc
      ? `
    const recenterControl = L.control({ position: 'topright' });

    recenterControl.onAdd = function(map) {
      const div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
      div.style.backgroundColor = 'white';
      div.style.width = '40px';
      div.style.height = '40px';
      div.style.display = 'flex';
      div.style.justifyContent = 'center';
      div.style.alignItems = 'center';
      div.style.cursor = 'pointer';
      div.title = 'Recenter map';

      div.innerHTML = '<svg fill="black" height="24" width="24" viewBox="0 0 24 24"><path d="M12 8a4 4 0 100 8 4 4 0 000-8zm0-6v2a8 8 0 018 8h2a10 10 0 00-10-10zM4 12a8 8 0 018-8V2a10 10 0 00-10 10h2zm8 8a8 8 0 01-8-8H2a10 10 0 0010 10v-2zm2.83-4.83L12 14l-2.83-2.83-1.41 1.41L12 16.83l4.24-4.24-1.41-1.41z"/></svg>';

      div.onclick = function() {
        map.setView([${userLoc.latitude}, ${userLoc.longitude}], 18);
      };

      return div;
    };

    recenterControl.addTo(map);
  `
      : '';

    return `
    <html>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
        <style>
          html, body, #map { height: 100%; margin: 0; padding: 0; }

          .leaflet-popup,
          .leaflet-popup-content-wrapper,
          .leaflet-popup-tip {
            margin-left: 30px !important;
          }


          /* Restore zoom control styles */
          .leaflet-control-zoom {
            width: 40px !important;
            height: 100px !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            align-items: center !important;
            padding: 5px 0 !important;
            background: white !important;
            border-radius: 4px !important;
            box-shadow: 0 1px 5px rgba(0,0,0,0.65) !important;
          }

          .leaflet-control-zoom-in,
          .leaflet-control-zoom-out {
            width: 40px !important;
            height: 40px !important;
            line-height: 38px !important;
            font-size: 28px !important;
            text-align: center !important;
            cursor: pointer !important;
          }

          /* Popup close button */
          .leaflet-popup-close-button {
            width: 40px !important;
            height: 40px !important;
            font-size: 28px !important;
            line-height: 38px !important;
          }

          /* Custom recenter button */
          .leaflet-control-custom {
            box-shadow: 0 1px 5px rgba(0,0,0,0.65);
            border-radius: 4px;
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          var map = L.map('map').setView(
            ${userLoc ? `[${userLoc.latitude}, ${userLoc.longitude}]` : '[46.557494, 15.645358]'},
            18
          );

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
            attribution: '&copy; OpenStreetMap contributors'
          }).addTo(map);

          ${userMarkerJs}

          window.routeLine = null;
          window.selectedLatLng = null;

          ${markersJs}
          ${routeJs}

          ${recenterControlJs}
        </script>
      </body>
    </html>
  `;
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <Header
        text="Maps"
      />
      <WebView
        originWhitelist={['*']}
        source={{ html: generateMapHtml(exchangeOffices, userLocation, selectedOfficeLocation) }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        style={{ flex: 1 }}
        onMessage={(event) => {
          try {
            const data = JSON.parse(event.nativeEvent.data);
            if (data.cancel) {
              setSelectedOfficeLocation(null);
            } else if (data.lat && data.lng) {
              setSelectedOfficeLocation({ latitude: data.lat, longitude: data.lng });
            }
          } catch (e) {
            console.log('Invalid message from WebView', e);
          }
        }}
      />
    </SafeAreaView>
  );
};

export default Map_screen;
