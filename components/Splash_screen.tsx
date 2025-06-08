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
  Platform,
} from 'react-native';
import AppStyles from '../styles/AppStyles.tsx';
import Header from './utils/Header.tsx';
import {useState, useEffect} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App.tsx';

const Splash_screen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
}) => {
  useEffect(() => {
    const myTimeout = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 9999999);
  }, []);

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
          backgroundColor: AppStyles.grayBackground_down.backgroundColor,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}
      >
        <View style={[AppStyles.grayBackground_down, {flex: 1}]}>
          <Image
            source={require('../resources/png/brzDinarWhite.png')}
            style={[
              AppStyles.horizontaly_centered,
              AppStyles.brzDinar_image_small,
              AppStyles.margin_top_spacing8,
              AppStyles.margin_bottom_spacing35,
            ]}
          />

          <Text style={[AppStyles.paragraph_4, AppStyles.white]}>
            Loading, please wait...
          </Text>

          <Image
            source={require('../resources/png/spinner.png')}
            style={[
              AppStyles.horizontaly_centered,
              AppStyles.image_80x80,
              AppStyles.margin_top_spacing8,
              AppStyles.margin_bottom_spacing10,
            ]}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
export default Splash_screen;
