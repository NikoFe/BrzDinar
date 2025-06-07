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
    const markersJs = offices.map((office) => {
      const ratesHtml =
        office.exchangeRates?.map((rate) => {
          return `
      <tr>
        <td>${rate.currency}</td>
        <td>${rate.buyValue}</td>
        <td>${rate.sellValue}</td>
      </tr>
    `;
        }).join('') ?? '';

      return `
      const marker${office.id} = L.marker([${office.latitude}, ${office.longitude}], {
        icon: L.icon({
          iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
          iconSize: [60, 80],
          iconAnchor: [20, 60],
          popupAnchor: [0, -60],
        })
      }).addTo(map);

      const popupContent = \`
        <div style="width: 300px; font-size: 32px;">
          <strong>${office.name}</strong><br/>
          <em>${office.description}</em><br/>
          <p><strong>Location:</strong> ${office.location}</p>
          <p><strong>Email:</strong> ${office.email}</p>
          <p><strong>Phone:</strong> ${office.phone}</p>
          <table border="1" style="width: 100%; font-size: 32px;">
            <thead><tr><th>Currency</th><th>Buy</th><th>Sell</th></tr></thead>
            <tbody>${ratesHtml}</tbody>
          </table>
        </div>
      \`;

      marker${office.id}.bindPopup(popupContent);

      // When popup opens, send message to start navigation (draw route)
      marker${office.id}.on('popupopen', () => {
        window.ReactNativeWebView.postMessage(JSON.stringify({ lat: ${office.latitude}, lng: ${office.longitude} }));
      });

      // When popup closes, send message to stop navigation (remove route)
      marker${office.id}.on('popupclose', () => {
        window.ReactNativeWebView.postMessage(JSON.stringify({ cancel: true }));
      });
    `;
    }).join('\n');


    const userMarkerJs = userLoc ? `
    const userMarker = L.circleMarker([${userLoc.latitude}, ${userLoc.longitude}], {
      radius: 20,
      color: '#2A81CB',
      fillColor: '#2A81CB',
      fillOpacity: 0.8,
      interactive: false  // disables click events on marker itself
    }).addTo(map);

    // Bind popup with options so it stays open until user clicks close
    userMarker.bindPopup('<div style="font-size: 32px;">Your current location</div>', { closeOnClick: false, autoClose: false }).openPopup();

    // Additionally disable pointer events on SVG path to prevent toggling popup on click
    if(userMarker._path) {
      userMarker._path.style.pointerEvents = 'none';
    }
  ` : '';


    const routeJs = userLoc && selectedLoc ? `
    if (window.routeLine) {
      map.removeLayer(window.routeLine);
    }
    window.routeLine = L.polyline([
      [${userLoc.latitude}, ${userLoc.longitude}],
      [${selectedLoc.latitude}, ${selectedLoc.longitude}]
    ], { color: 'red', weight: 4 }).addTo(map);
    window.selectedLatLng = { lat: ${selectedLoc.latitude}, lng: ${selectedLoc.longitude} };

    // Reopen marker popup
    map.eachLayer(layer => {
      if (layer.getLatLng && layer.getLatLng().lat === ${selectedLoc.latitude} && layer.getLatLng().lng === ${selectedLoc.longitude}) {
        layer.openPopup();
        if (layer.setPopupContent) {
          layer.setPopupContent(layer.getPopup().getContent().replace('Navigate', 'Stop Navigation'));
        }
      }
    });
  ` : `
    if (window.routeLine) {
      map.removeLayer(window.routeLine);
      window.routeLine = null;
    }
    window.selectedLatLng = null;
  `;

    return `
    <html>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
        <style>
          html, body, #map { height: 100%; margin: 0; padding: 0; }
          .leaflet-control-zoom {
            display: flex !important;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100% !important;
          }
          .leaflet-control-zoom-in,
          .leaflet-control-zoom-out {
            width: 80px !important;
            height: 80px !important;
            font-size: 50px !important;
            line-height: 80px !important;
            text-align: center;
            margin: 5px 0;
          }
          button {
            background-color: #2A81CB;
            color: white;
            border: none;
            border-radius: 10px;
          }
          .leaflet-popup-close-button {
            width: 40px !important;
            height: 40px !important;
            font-size: 28px !important;
            line-height: 38px !important;
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          var map = L.map('map').setView([46.557494, 15.645358], 18);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
            attribution: '&copy; OpenStreetMap contributors'
          }).addTo(map);

          ${userMarkerJs}

          window.routeLine = null;
          window.selectedLatLng = null;

          ${markersJs}
          ${routeJs}
        </script>
      </body>
    </html>
  `;
  };

  const onMessage = (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      if (data.cancel) {
        setSelectedOfficeLocation(null);
      } else if (data.lat && data.lng) {
        setSelectedOfficeLocation({ latitude: data.lat, longitude: data.lng });
      }
    } catch (e) {
      console.warn('Failed to parse message from WebView', e);
    }
  };

  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{ flex: 1 }}>
        <Header text="Maps" />
        <WebView
          originWhitelist={['*']}
          source={{ html: generateMapHtml(exchangeOffices, userLocation, selectedOfficeLocation) }}
          style={{ flex: 1 }}
          onMessage={onMessage}
        />
      </SafeAreaView>
    </>
  );
};

export default Map_screen;
