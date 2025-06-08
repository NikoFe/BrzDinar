import React from 'react';
import {useState,useEffect} from "react";
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
  ScrollView,
  Platform,
} from 'react-native';
import AppStyles from '../styles/AppStyles.tsx';
import Header from './utils/Header.tsx';
import {RootStackParamList} from '../App.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AdminCell from './utils/AdminCell.tsx';
import HeaderWithProfile from './utils/HeaderWithProfile.tsx';

const Admin_cheek_screen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {

  const [pendingOffices, setPendingOffices] =
   useState<Array<{ 
    name: string; 
    created: string,
    password:number
    exchangeRates:Array<{ imageName: string; currency: string,buyValue:number, sellValue:number}> 
    location:string
    email:string
    description:string 
    phone:string
    monday1:string
    monday2:string
    tuesday1:string
    tuesday2:string
    wednsday1:string
    wednsday2:string
    thursday1:string
    thursday2:string
    friday1:string
    friday2:string
    saturday1:string
    saturday2:string
    sunday1:string
    sunday2:string
   }>>([]);

useEffect(() => {
  const sampleOffices = [
    {
      name: 'INSA menjalnica',
      created: '09/04/2025',
      password: 1234,
      exchangeRates: [
        { imageName: 'eur.png', currency: 'EUR', buyValue: 1.1, sellValue: 1.2 },
        { imageName: 'usd.png', currency: 'USD', buyValue: 1.0, sellValue: 1.1 },
      ],
      location: 'Ljubljana',
      email: 'insa@example.com',
      description: 'Currency exchange office in city center.',
      phone: '+38640123456',
      monday1: '08:00',
      monday2: '16:00',
      tuesday1: '08:00',
      tuesday2: '16:00',
      wednsday1: '08:00',
      wednsday2: '16:00',
      thursday1: '08:00',
      thursday2: '16:00',
      friday1: '08:00',
      friday2: '16:00',
      saturday1: '10:00',
      saturday2: '14:00',
      sunday1: '',
      sunday2: '',
    },
    {
      name: 'M exchange',
      created: '08/20/2025',
      password: 5678,
      exchangeRates: [
        { imageName: 'gbp.png', currency: 'GBP', buyValue: 1.3, sellValue: 1.4 },
      ],
      location: 'Maribor',
      email: 'mexchange@example.com',
      description: 'We offer best rates in the region.',
      phone: '+38640567890',
      monday1: '09:00',
      monday2: '17:00',
      tuesday1: '09:00',
      tuesday2: '17:00',
      wednsday1: '09:00',
      wednsday2: '17:00',
      thursday1: '09:00',
      thursday2: '17:00',
      friday1: '09:00',
      friday2: '17:00',
      saturday1: '',
      saturday2: '',
      sunday1: '',
      sunday2: '',
    },
  ];

  setPendingOffices(sampleOffices);
}, []);


  return (
    <>
      <StatusBar hidden={false}/>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 1,
        }}
      >
        <ScrollView>
          <HeaderWithProfile text="Admin_check"></HeaderWithProfile>
          <View style={[AppStyles.grayBackground, {flex: 1}]}>
            <Text
              style={[
                AppStyles.paragraph_1,
                AppStyles.horizontaly_centered,
                AppStyles.margin_top_spacing2,
                AppStyles.white,
              ]}>
              Requests:
            </Text>

            <View>
            {
              pendingOffices.map((pending) => 
             <View style={[AppStyles.margin_top_spacing4, {flex: 1}]}>
              <AdminCell 
               name={pending.name}
               created={"9/20/5"}
               password={"placeholder_password"}
              />
             </View>
              )}
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Admin_cheek_screen;
