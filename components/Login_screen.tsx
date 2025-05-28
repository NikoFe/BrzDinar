import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import AppStyles from '../styles/AppStyles.tsx';
import { RootStackParamList } from '../App.tsx';
import Header from './utils/Header.tsx';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppTextInputWithLabel from './utils/AppTextInputWithLabel.tsx';
import Primary_button from './utils/Primary_button.tsx';

const Login_screen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      setErrorMessage('');
      navigation.navigate('Exchange_office');
    } catch (error: any) {
      setErrorMessage('Error! Invalid credentials');
    }
  };

  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{ flex: 1 }}>
        <Header text="Login" />
        <View style={[AppStyles.grayBackground, { flex: 1 }]}>
          <View style={AppStyles.margin_top_spacing13}>
            <Text
              style={[
                AppStyles.header_3_bold_Inter_white,
                AppStyles.white,
                AppStyles.horizontaly_centered,
              ]}>
              Login
            </Text>
          </View>

          <View style={AppStyles.margin_top_spacing6}>
            <AppTextInputWithLabel
              label="Email:"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View style={AppStyles.margin_top_spacing6}>
            <AppTextInputWithLabel
              label="Password:"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          {/* Show error message if login fails */}
          {errorMessage !== '' && (
            <Text
              style={[
                AppStyles.error_text,
                AppStyles.horizontaly_centered,
                AppStyles.margin_top_spacing6,
              ]}>
              {errorMessage}
            </Text>
          )}

          <View style={AppStyles.margin_top_spacing6}>
            <Primary_button onPressFunction={handleLogin} text="Login" />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login_screen;
