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
import Header from './utils/Header.tsx';
import {RootStackParamList} from '../App.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AdminCell from './utils/AdminCell.tsx';
import HeaderWithProfile from './utils/HeaderWithProfile.tsx';

const Admin_cheek_screen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {
  return (
    <>
      <ScrollView>
        <StatusBar hidden={true} />
        <SafeAreaView style={{flex: 1}}>
          <HeaderWithProfile text="Admin_check"></HeaderWithProfile>
          <View style={[AppStyles.grayBackground, {flex: 1}]}>
            <Text
              style={[
                AppStyles.paragraph_1,
                AppStyles.horizontaly_centered,
                AppStyles.margin_top_spacing2,
                AppStyles.white,
              ]}>
              Requests:
            </Text>
            <View style={[AppStyles.margin_top_spacing4, {flex: 1}]}>
              <AdminCell />
            </View>
            <View style={[AppStyles.margin_top_spacing4, {flex: 1}]}>
              <AdminCell />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default Admin_cheek_screen;
