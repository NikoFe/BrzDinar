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



const Login_screen = (
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
          text="Login"
        
        ></Header>
        <View style={[AppStyles.grayBackground, {flex: 1}]}>
          <Text>Splash_screen222</Text>
        </View>
      </SafeAreaView>
    </>
  )
}

export default Login_screen 