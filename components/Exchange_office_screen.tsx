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
import AppTextInputWithLabel from './utils/AppTextInputWithLabel.tsx';
import Primary_button from './utils/Primary_button.tsx';
import RateContainer from './utils/RateContainer.tsx';
import HeaderWithProfile from './utils/HeaderWithProfile.tsx';

const Exchange_office_screen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {
  return (
    <>
      <ScrollView>
        <StatusBar hidden={true} />
        <SafeAreaView style={{flex: 1}}>
          <HeaderWithProfile text="Exchange office"></HeaderWithProfile>
          <View style={[AppStyles.grayBackground, {flex: 1}]}>
            <ExchangeOfficeData />
            <View
              style={[
                AppStyles.horizontaly_centered,
                AppStyles.margin_top_spacing3,
              ]}>
              <AppTextInputWithLabel
                label="Location"
                defaultText="Pobreška cesta 18,2000..."></AppTextInputWithLabel>
            </View>

            <View
              style={[
                AppStyles.horizontaly_centered,
                AppStyles.margin_top_spacing3,
              ]}>
              <AppTextInputWithLabel
                label="Phone number:"
                defaultText="030-689-421"></AppTextInputWithLabel>
            </View>

            <View
              style={[
                AppStyles.horizontaly_centered,
                AppStyles.margin_top_spacing3,
              ]}>
              <Primary_button
                onPressFunction={() => {}}
                text="Change"></Primary_button>
            </View>
            <View
              style={[
                AppStyles.horizontaly_centered,
                AppStyles.margin_top_spacing3,
              ]}>
              <RateContainer></RateContainer>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default Exchange_office_screen;
