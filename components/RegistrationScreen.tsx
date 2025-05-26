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
import {RootStackParamList} from '../App.tsx';
import Header from './utils/Header.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AppTextInputWithLabel from './utils/AppTextInputWithLabel.tsx';
import Primary_button from './utils/Primary_button.tsx';
import Secondary_button from './utils/Secondary_button.tsx';

const RegistrationScreen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{flex: 1}}>
        <Header text="Registration"></Header>
        <View style={[AppStyles.grayBackground, {flex: 1}]}>
          <View style={AppStyles.margin_top_spacing13}>
            <Text
              style={[
                AppStyles.header_3_bold_Inter_white,
                AppStyles.white,
                AppStyles.horizontaly_centered,
              ]}>
              Registration
            </Text>
          </View>

          <View style={AppStyles.margin_top_spacing6}>
            <AppTextInputWithLabel
              label="Name:"
              defaultText="AAA"></AppTextInputWithLabel>
          </View>
          <View style={AppStyles.margin_top_spacing6}>
            <AppTextInputWithLabel
              label="Password:"
              defaultText="AAA"></AppTextInputWithLabel>
          </View>

          <View style={AppStyles.margin_top_spacing6}>
            <Primary_button
              onPressFunction={() => {
                navigation.navigate('Exchange_office');
              }}
              text="Register"
            />
          </View>
          <Text
            style={[
              AppStyles.error_text,
              AppStyles.horizontaly_centered,
              AppStyles.margin_top_spacing6,
            ]}>
            Error! Invalid credentials
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default RegistrationScreen;
