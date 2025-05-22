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
import Header from './utils/Header.tsx';
import {useState, useEffect} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from "../App.tsx"


const Splash_screen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
}) => {
  useEffect(() => {
    const myTimeout = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 5000);
  }, []);

  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{flex: 1}}>
        <Header
          text="Splash"
        
        ></Header>
        <View style={[AppStyles.grayBackground, {flex: 1}]}>
          <Text>Splash_screen222</Text>
        </View>
      </SafeAreaView>
    </>
  );
};
export default Splash_screen;
