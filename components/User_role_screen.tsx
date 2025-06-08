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
import Header from './utils/Header.tsx';
import Primary_button from './utils/Primary_button.tsx';
import {RootStackParamList} from '../App.tsx';

const User_role_screen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'User_role'>;
}) => {
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
        <View style={[AppStyles.grayBackground, {flex: 1}]}>
          <Image
            source={require('../resources/png/profile-vector.png')}
            style={[
              AppStyles.horizontaly_centered,
              AppStyles.image_200x200,
              AppStyles.margin_top_spacing13,
            ]}
          />

          <Text
            style={[
              AppStyles.header_3_bold_Inter_white,
              AppStyles.horizontaly_centered,
              AppStyles.margin_top_spacing10,
            ]}>
            Regular user
          </Text>

          <View style={[AppStyles.horizontaly_centered]}>
            <Text
              style={[
                AppStyles.paragraph_3,
                AppStyles.white,
                AppStyles.width_300,
              ]}>
              As a regular user you can look at various exchange offices on the
              apps map and find the shortest path to the office's location on
              the map
            </Text>
          </View>

          <View style={[AppStyles.margin_top_spacing4]}>
            <Primary_button
              onPressFunction={() => {
                navigation.navigate('Map');
              }}
              text="Get Started"></Primary_button>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default User_role_screen;
