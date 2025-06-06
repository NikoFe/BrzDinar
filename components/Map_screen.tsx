import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
  Alert,
  Text,
  View,
  Button,
  TextInput,
  Image,
} from 'react-native';
import AppStyles from '../styles/AppStyles.tsx';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App.tsx';
import Header from './utils/Header.tsx';
import ExchangeOfficeData from './utils/ExchangeOfficeData.tsx';
import Primary_button from './utils/Primary_button.tsx';
import Secondary_button from './utils/Secondary_button.tsx';
import { WebView } from 'react-native-webview';
import { firebase } from '@react-native-firebase/firestore';

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


const Map_screen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {
  const [exchangeOffices, setExchangeOffices] = useState<ExchangeOffice[]>([]);

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

    fetchExchangeOffices();
  }, []);

  const generateMapHtml = (offices: ExchangeOffice[]) => {
    const markers = offices.map((office) => {
      const ratesHtml = office.exchangeRates?.map((rate: any) => {
        return `
        <tr>
          <td>${rate.currency}</td>
          <td>${rate.buyValue}</td>
          <td>${rate.sellValue}</td>
        </tr>
      `;
      }).join('') ?? '';

      return `
      const marker = L.marker([${office.latitude}, ${office.longitude}], {
        icon: L.icon({
          iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
          iconSize: [40, 60], // ⬅️ bigger pinpoints
          iconAnchor: [20, 60],
          popupAnchor: [0, -60],
        })
      }).addTo(map);
      marker.bindPopup(\`
        <div style="width: 300px; font-size: 14px;">
          <strong>${office.name}</strong><br/>
          <em>${office.description}</em><br/>
          <p><strong>Location:</strong> ${office.location}</p>
          <p><strong>Email:</strong> ${office.email}</p>
          <p><strong>Phone:</strong> ${office.phone}</p>
          <table border="1" style="width: 100%; font-size: 12px;">
            <thead><tr><th>Currency</th><th>Buy</th><th>Sell</th></tr></thead>
            <tbody>${ratesHtml}</tbody>
          </table>
        </div>\`);
    `;
    }).join('');

    return `
    <html>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
        <style>
          html, body, #map { height: 100%; margin: 0; padding: 0; }
          .leaflet-control-zoom-in, .leaflet-control-zoom-out {
            width: 40px !important;
            height: 40px !important;
            font-size: 24px !important;
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          var map = L.map('map').setView([46.557494, 15.645358], 16);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors'
          }).addTo(map);

          ${markers}
        </script>
      </body>
    </html>
  `;
  };

  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{ flex: 1 }}>
        <Header text="Maps"></Header>
        <WebView
          originWhitelist={['*']}
          source={{ html: generateMapHtml(exchangeOffices) }}
          style={{ flex: 1 }}
        />
      </SafeAreaView>
    </>
  );
};

export default Map_screen;