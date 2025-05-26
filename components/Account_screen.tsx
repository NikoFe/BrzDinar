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
import HeaderWithProfile from './utils/HeaderWithProfile.tsx';

const Account_screen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{flex: 1}}>
        <HeaderWithProfile text="Account"></HeaderWithProfile>
        <View style={[AppStyles.grayBackground, {flex: 1}]}>
          <View style={[AppStyles.margin_top_spacing2]}>
            <Text
              style={[
                AppStyles.white,
                AppStyles.paragraph_3_non_center,
                AppStyles.margin_left_35,
              ]}>
              Name:
            </Text>
          </View>
          <View style={[AppStyles.margin_top_spacing2]}>
            <Text
              style={[
                AppStyles.gray5,
                AppStyles.paragraph_3_non_center,
                AppStyles.margin_left_35,
              ]}>
              INSA menjalnica
            </Text>
          </View>
          <View style={[AppStyles.margin_top_spacing2]}>
            <Text
              style={[
                AppStyles.white,
                AppStyles.paragraph_3_non_center,
                AppStyles.margin_left_35,
              ]}>
              Login date:
            </Text>
          </View>
          <View style={[AppStyles.margin_top_spacing2]}>
            <Text
              style={[
                AppStyles.gray5,
                AppStyles.paragraph_3_non_center,
                AppStyles.margin_left_35,
              ]}>
              09/04/2025
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Account_screen;
