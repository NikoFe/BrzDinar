import React from 'react';
import {useState} from 'react';
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
import HeaderWithProfile from './utils/HeaderWithProfile.tsx';

const UpdateExchangeScreen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {

  const [buyValue, setBuyValue]= useState(0)
  const [sellValue, setSellValue]= useState(0)
  const [selectedDropDown, setSelectedDropdown] =useState("")


  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{flex: 1}}>
        <HeaderWithProfile text="Update exchange rate"></HeaderWithProfile>
        <View style={[AppStyles.grayBackground, {flex: 1}]}>
          <View style={[AppStyles.margin_top_spacing37]}>
            <AppDropdown 
            title="aaa"
            values={["a","b", "c"]}
            onPressFunction={()=>{}}
            dropdownSetter={()=>{}}
            ></AppDropdown>
          </View>
          <View style={[AppStyles.margin_top_spacing3]}>
            <NumberInput 
            value={59.87} 
            label="Buy:"
            setValue={setBuyValue}

            />
          </View>
          <View style={[AppStyles.margin_top_spacing1]}>
            <NumberInput
             value={59.87}
              label="Sell:"
              setValue={setSellValue} 
            
            />
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
