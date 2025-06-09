import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import AppStyles from '../styles/AppStyles.tsx';
import { RootStackParamList } from '../App.tsx';
import Header from './utils/Header.tsx';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppTextInputWithLabel from './utils/AppTextInputWithLabel.tsx';
import Primary_button from './utils/Primary_button.tsx';
import { RouteProp } from '@react-navigation/native';
import { adminCredentials } from '../config/adminCredentials';
import firestore from '@react-native-firebase/firestore';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

const Login_screen = ({
  navigation,
  route
}: {
  //  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
}) => {
  const { type } = route.params;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      if (type === "Login as Admin") {
        // Check against hardcoded admin credentials
        if (email === adminCredentials.username && password === adminCredentials.password) {
          setErrorMessage('');
          navigation.navigate('Admin_check');
        } else {
          setErrorMessage('Error! Invalid admin credentials');
        }
      } else {
        // Regular office login using Firebase
        const userCredential = await auth().signInWithEmailAndPassword(email, password);
        setErrorMessage('');
        
        // Check if the office is approved
        const snapshot = await firestore()
          .collection('exchange_offices')
          .where('email', '==', email)
          .limit(1)
          .get();

        if (!snapshot.empty) {
          const officeData = snapshot.docs[0].data();
          // If approved field doesn't exist or is true, navigate to Exchange_office
          if (officeData.approved === undefined || officeData.approved === true) {
            navigation.navigate('Exchange_office', { email });
          } else {
            navigation.navigate('Waiting');
          }
        } else {
          setErrorMessage('Error! Office not found');
        }
      }
    } catch (error: any) {
      setErrorMessage('Error! Invalid credentials');
    }
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
        <Header text="Login" onBackPress={() => navigation.navigate('Exchange_role')} />
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <ScrollView 
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={[AppStyles.grayBackground, { flex: 1 }]}>
              <View style={AppStyles.margin_top_spacing13}>
                <Text
                  style={[
                    AppStyles.header_3_bold_Inter_white,
                    AppStyles.white,
                    AppStyles.horizontaly_centered,
                  ]}>
                  {type}
                </Text>
              </View>

              <View style={AppStyles.margin_top_spacing6}>
                <AppTextInputWithLabel
                  label="Email:"
                  value={email}
                  onChangeText={setEmail}
                  defaultValue="janez@example.com"
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>

              <View style={AppStyles.margin_top_spacing6}>
                <AppTextInputWithLabel
                  label="Password:"
                  value={password}
                  onChangeText={setPassword}
                  defaultValue="password"
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
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default Login_screen;
