import React from 'react';
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
} from 'react-native';
 import AppStyles from '../styles/AppStyles.tsx';
import {RootStackParamList} from "../App.tsx"
import Header from './utils/Header.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ExchangeOfficeData from './utils/ExchangeOfficeData.tsx';

 const Exchange_office_screen = (
    {
    navigation,
  }: {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
  }
 ) => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{flex: 1}}>
        <Header
          text="Exchange office"
        
        ></Header>
        <View style={[AppStyles.grayBackground, {flex: 1}]}>
      <ExchangeOfficeData/>
      


        </View>
      </SafeAreaView>
    </>
  )
}

 export default Exchange_office_screen