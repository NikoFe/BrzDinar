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
  ScrollView,
} from 'react-native';
import AppStyles from '../styles/AppStyles.tsx';
import {RootStackParamList} from '../App.tsx';
import Header from './utils/Header.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ExchangeOfficeData from './utils/ExchangeOfficeData.tsx';
import RateContainer from './utils/RateContainer.tsx';
import HeaderWithProfile from './utils/HeaderWithProfile.tsx';

const Exchange_details = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {
  return (
    <>
      <ScrollView>
        <StatusBar hidden={true} />
        <SafeAreaView style={{flex: 1}}>
          <HeaderWithProfile text="Details"></HeaderWithProfile>
          <View style={[AppStyles.grayBackground, {flex: 1}]}>
            <ExchangeOfficeData />

            <View style={[AppStyles.margin_top_spacing2]}>
              <Text style={[AppStyles.paragraph_3, AppStyles.white]}>
                Exchange rates:
              </Text>
            </View>

            <View style={[AppStyles.margin_top_spacing3]}>
              <RateContainer />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default Exchange_details;
