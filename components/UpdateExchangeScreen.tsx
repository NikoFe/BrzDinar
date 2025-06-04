import React from 'react';
import {useState, useEffect} from 'react';
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
import Primary_button from './utils/Primary_button.tsx';
import HeaderWithProfile from './utils/HeaderWithProfile.tsx';
import { RouteProp } from '@react-navigation/native';
import NumberInput from './utils/NumberInput.tsx';

type OfficeUpdateProp = RouteProp<RootStackParamList, 'Update_exchange'>;



const UpdateExchangeScreen = ({
  route,
  navigation,

}: {
   route: OfficeUpdateProp;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Update_exchange'>;
}) => {

  const {
  exchangeRates,
  setExchangeRates,
  currency,
  buyValue,
  sellValue,
  flag,
  } = route.params;

  const [buyValue2, setBuyValue2]= useState(buyValue)
  const [sellValue2, setSellValue2]= useState(sellValue)
  const [selectedDropDown, setSelectedDropdown] =useState(currency)
  const [oldBuyValue, setOldBuyValue]= useState(buyValue)
  const [oldSellValue, setOldSellValue]= useState(sellValue)
  //const [oldCurrencyValue, setOldCurrencyValue]= useState(currency)
  const oldCurrencyValue=currency



  const checkInputs = async () => {
  
    try {
 
      if(buyValue2==0 ||sellValue2==0 ||  buyValue2<0|| sellValue2<0  ||selectedDropDown=="" ){
         Alert.alert("empty or invalid fields")
      }
      else {
     //  Alert.alert("SUCCESS: ", selectedDropDown)

       UpdateExchange()
     //  navigation.goBack();
      }

    } catch (error: any) {
    Alert.alert("error")
    }
  };

useEffect(() => {
  Alert.alert(oldCurrencyValue)
  //Runs only on the first render
}, []);
 const  UpdateExchange = async ()=>{

    const newExchange ={
    imageName: "australian-flag.png",
    buyValue:buyValue2,
    sellValue:sellValue2,
    currency:selectedDropDown,
    }

   let copiedRates =exchangeRates.slice()

   for(let i=0; i<copiedRates.length; i++){

    if(copiedRates[i].buyValue== oldBuyValue && copiedRates[i].sellValue== oldSellValue &&  copiedRates[i].currency == oldCurrencyValue){
    copiedRates.splice(i,1)
    Alert.alert("FOUND")
    break;
    }
    if(i==copiedRates.length-1){

         Alert.alert("THEIR buy: "+copiedRates[i].buyValue+ " sell: "+copiedRates[i].sellValue+ " currency: " + copiedRates[i].currency+"\n"
         +"MINE buy: "+oldBuyValue+ " sell: "+oldSellValue+ " currency: " +  oldCurrencyValue



         )

   
    }

   }
   copiedRates.push(newExchange)
   setExchangeRates(copiedRates)

   navigation.goBack()
 }


  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{flex: 1}}>
        <HeaderWithProfile text="Update exchange rate"></HeaderWithProfile>
        <View style={[AppStyles.grayBackground, {flex: 1}]}>
          <View style={[AppStyles.margin_top_spacing37]}>
            <AppDropdown 
            title="aaa"
            values={["AUD", "USD","EUR"]}
            onPressFunction={()=>{}}
            dropdownSetter={setSelectedDropdown}
            ></AppDropdown>
          </View>
          <View style={[AppStyles.margin_top_spacing3]}>
            <NumberInput 
            value={buyValue2}
            label="Buy:"
            setValue={setBuyValue2}

            />
          </View>
          <View style={[AppStyles.margin_top_spacing1]}>
            <NumberInput
             value={sellValue2}
              label="Sell:"
              setValue={setSellValue2} 
            
            />
          </View>
          <View style={[AppStyles.margin_top_spacing12]}>
            <Primary_button
              onPressFunction={UpdateExchange}
              text="Create"></Primary_button>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default UpdateExchangeScreen;
