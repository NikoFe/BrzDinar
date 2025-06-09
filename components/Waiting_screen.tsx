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
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App.tsx';
import Header from './utils/Header.tsx';
import auth from '@react-native-firebase/auth';

const Waiting_screen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {
  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.navigate('Login', { type: 'Login as Office' });
    } catch (error) {
      console.error('Error signing out:', error);
      Alert.alert('Error', 'Failed to log out. Please try again.');
    }
  };

  const handleBackPress = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: handleLogout,
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
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
        <Header text="Create exchange offices" onBackPress={handleBackPress}></Header>
        <View style={[AppStyles.grayBackground, {flex: 1}]}>
          <Image
            source={require('../resources/png/wait.png')}
            style={[
              AppStyles.horizontaly_centered,
              AppStyles.wait_image,
              AppStyles.margin_top_spacing13,
            ]}
          />

          <View
            style={[
              AppStyles.margin_top_spacing6,
              AppStyles.width_350,
              AppStyles.horizontaly_centered,
            ]}>
            <Text style={[AppStyles.paragraph_4, AppStyles.white]}>
              All fields have been filled, please wait for the administrator to
              review your form, this may take a while ...
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Waiting_screen;
