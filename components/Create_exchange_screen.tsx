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
  Platform,
} from 'react-native';
import AppStyles from '../styles/AppStyles.tsx';
import {RootStackParamList} from '../App.tsx';
import Header from './utils/Header.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AppDropdown from './utils/AppDropdown.tsx';
import NumberInput from './utils/NumberInput.tsx';
import Primary_button from './utils/Primary_button.tsx';
import HeaderWithProfile from './utils/HeaderWithProfile.tsx';
import { RouteProp } from '@react-navigation/native';


type OfficeCreateProp = RouteProp<RootStackParamList, 'Create_exchange'>;

/*
type Props = {
  route: OfficeCreateProp;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Create_exchange'>;
};*/

const Create_exchange = ({
  route,
  navigation,
 // setExchangeArray
}: {
    route: OfficeCreateProp;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
//  setExchangeArray: (variable:string)=>void
}) => {
 
  const {
  exchangeRates,
  setExchangeRates
  } = route.params;




  const [buyValue, setBuyValue]= useState(0)
  const [sellValue, setSellValue]= useState(0)
  const [selectedDropDown, setSelectedDropdown] =useState("")


  const checkInputs2 = async () => {
  
    try {
 
      if(buyValue==0 ||sellValue==0 ||  buyValue<0|| sellValue<0  ||selectedDropDown=="" ){
         Alert.alert("empty or invalid fields")
      }
      else {
     //  Alert.alert("SUCCESS: ", selectedDropDown)

       const newExchange ={
       imageName: "australian-flag.png",
       buyValue:buyValue,
       sellValue:sellValue,
       currency:selectedDropDown,
       }

     setExchangeRates([...exchangeRates,newExchange])
       navigation.goBack();
      }

    } catch (error: any) {
    Alert.alert("error")
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
          backgroundColor: AppStyles.headerBackground.backgroundColor,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}
      >
        <HeaderWithProfile text="Create exchange rate"></HeaderWithProfile>
        <View style={[AppStyles.grayBackground, {flex: 1}]}>
          <View style={[AppStyles.margin_top_spacing37]}>
            <AppDropdown 
            onPressFunction={()=>{}}
            title="Currency"
            values={["AUD", "USD","EUR"]}

            dropdownSetter ={setSelectedDropdown}
            ></AppDropdown>
          </View>
          <View style={[AppStyles.margin_top_spacing3]}>
            <NumberInput value={buyValue} label="Buy:"
            setValue={setBuyValue}
            />
          </View>
          <View style={[AppStyles.margin_top_spacing1]}>
            <NumberInput value={sellValue} label="Sell:" 
             setValue={setSellValue}
            />
          </View>
          <View style={[AppStyles.margin_top_spacing12]}>
            <Primary_button
              onPressFunction={() => checkInputs2()}
              text="Create"></Primary_button>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Create_exchange;
