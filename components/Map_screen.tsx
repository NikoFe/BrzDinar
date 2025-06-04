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
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App.tsx';
import Header from './utils/Header.tsx';
import ExchangeOfficeData from './utils/ExchangeOfficeData.tsx';
import Primary_button from './utils/Primary_button.tsx';
import Secondary_button from './utils/Secondary_button.tsx';
import Header from './utils/Header.tsx';

const Map_screen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{flex: 1}}>
        <Header text="Maps"></Header>
        <View style={[AppStyles.grayBackground, {flex: 1}]}>
          <ExchangeOfficeData 
          />

          <View style={[AppStyles.margin_top_spacing3]}> </View>
          <Image
            source={require('../resources/png/map1.png')}
            style={[AppStyles.horizontaly_centered, AppStyles.map_image]}
          />

          <View style={[AppStyles.margin_top_spacing3]}>
            <Primary_button
              onPressFunction={() => {
                navigation.navigate('Exchange_details');
              }}
              text="Details"></Primary_button>
          </View>

          <View style={[AppStyles.margin_top_spacing2]}>
            <Secondary_button
              onPressFunction={() => {}}
              text="Path"></Secondary_button>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Map_screen;
