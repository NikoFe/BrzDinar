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
import AppDropdown from './utils/AppDropdown.tsx';
import NumberInput from './utils/NumberInput.tsx';
import Primary_button from './utils/Primary_button.tsx';

const UpdateExchangeScreen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{flex: 1}}>
        <Header text="Create exchange rate"></Header>
        <View style={[AppStyles.grayBackground, {flex: 1}]}>
          <View style={[AppStyles.margin_top_spacing37]}>
            <AppDropdown input="aaa"></AppDropdown>
          </View>
            <View style={[AppStyles.margin_top_spacing3]}>
          <NumberInput defaultNumber={59.87} label="Buy:" />
          </View>
                 <View style={[AppStyles.margin_top_spacing1]}>
          <NumberInput defaultNumber={59.87} label="Sell:" />
          </View>
                      <View style={[AppStyles.margin_top_spacing12]}>
          <Primary_button
            onPressFunction={() => {}}
            text="Create"></Primary_button>
            </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default UpdateExchangeScreen;
