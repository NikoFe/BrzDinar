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
  Image,
} from 'react-native';
import AppStyles from '../styles/AppStyles.tsx';
import Header from './utils/Header.tsx';
import Primary_button from './utils/Primary_button.tsx';
import Secondary_button from './utils/Secondary_button.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App.tsx';

const Exchange_role_screen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Exchange_role'>;
}) => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{flex: 1}}>
        <View style={[AppStyles.grayBackground, {flex: 1}]}>
          <Image
            source={require('../resources/png/dollar-bills.png')}
            style={[
              AppStyles.horizontaly_centered,
              AppStyles.image_300x150,
              AppStyles.margin_top_spacing13,
            ]}
          />
          <Text
            style={[
              AppStyles.header_3_bold_Inter_white,
              AppStyles.horizontaly_centered,
              AppStyles.margin_top_spacing10,
            ]}>
            Exchange_office
          </Text>
          <View style={[AppStyles.horizontaly_centered]}>
            <Text
              style={[
                AppStyles.paragraph_3,
                AppStyles.white,
                AppStyles.width_300,
                AppStyles.margin_top_spacing6,
              ]}>
              As an exchange office you can add you’re exchange office to our
              map and monitor your company’s finances or if you are an admin,
              give permission to exchange offices to add their office to the
              app’s map
            </Text>
          </View>
          <View style={[AppStyles.margin_top_spacing4]}>
            <Primary_button
              onPressFunction={() => {
                navigation.navigate('Office_create_1');
              }}
              text="Create"></Primary_button>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Exchange_role_screen;
