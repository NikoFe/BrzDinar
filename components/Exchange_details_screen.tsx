import React, { useState } from 'react';
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
import {RootStackParamList} from '../App.tsx';
import Header from './utils/Header.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ExchangeOfficeData from './utils/ExchangeOfficeData.tsx';
import RateContainer from './utils/RateContainer.tsx';
import HeaderWithProfile from './utils/HeaderWithProfile.tsx';
import {RouteProp} from '@react-navigation/native';

type ExchangeDetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Exchange_details'>;
type ExchangeDetailsScreenRouteProp = RouteProp<RootStackParamList, 'Exchange_details'>;

const Exchange_details = ({
  navigation,
  route,
}: {
  navigation: ExchangeDetailsScreenNavigationProp;
  route: ExchangeDetailsScreenRouteProp;
}) => {
  const { officeData } = route.params;
  const [exchangeRates, setExchangeRates] = useState(officeData.exchangeRates);
  const [selectedRate, setSelectedRate] = useState<{ imageName: string; currency: string; buyValue: number; sellValue: number } | null>(null);

  const navigateToCreate = () => {
    // Since this is a view-only screen, we don't need to implement this
    Alert.alert('Info', 'This is a view-only screen');
  };

  const navigateToEdit = () => {
    // Since this is a view-only screen, we don't need to implement this
    Alert.alert('Info', 'This is a view-only screen');
  };

  return (
    <>
      <StatusBar 
        hidden={false}
        barStyle="light-content"
        translucent={true}
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: AppStyles.grayBackground.backgroundColor,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}
      >
        <HeaderWithProfile text="Details"></HeaderWithProfile>
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
          <View style={[AppStyles.grayBackground, {flex: 1, minHeight: '100%'}]}>
            <ExchangeOfficeData data={officeData} />

            <View style={[AppStyles.margin_top_spacing2]}>
              <Text style={[AppStyles.paragraph_3, AppStyles.white]}>
                Exchange rates:
              </Text>
            </View>

            <View style={[AppStyles.margin_top_spacing3, {flex: 1}]}>
              <RateContainer 
                navigateToCreate={navigateToCreate}
                navigateToEdit={navigateToEdit}
                exchangeRates={exchangeRates}
                setExchangeRates={setExchangeRates}
                setSelectedRate={setSelectedRate}
                isViewOnly={true}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Exchange_details;
