
import React, { useState } from 'react';
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
  ScrollView
} from 'react-native';
 import AppStyles from '../../styles/AppStyles.tsx';
import ExchangeRate from './ExchangeRate.tsx';
import PlusButton from './PlusButton.tsx';
import {useEffect} from 'react';

const RateContainer = (

{
navigateToCreate,
navigateToEdit,
exchangeRates,
setExchangeRates,
selectedRate,
setSelectedRate


}: {
//  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
   navigateToCreate: ()=>void; 
   navigateToEdit: ()=>void; 
   exchangeRates: Array<{ imageName: string; currency: string,buyValue:number, sellValue:number}>,
   setExchangeRates: (variable:Array<{ imageName: string; currency: string,buyValue:number, sellValue:number}>)=>void;
   selectedRate: { imageName: string; currency: string,buyValue:number, sellValue:number},
   setSelectedRate :(variable:{ imageName: string; currency: string,buyValue:number, sellValue:number})=>void;

}

) => {

  const addExchangeRate = async (imageName:string,currency:string,buyValue:number,sellValue:number   ) => {
  // Alert.alert("AAAAAA")
       const newItem = {
       imageName: imageName,
      currency: currency,
      buyValue: buyValue,
      sellValue: sellValue,
    };
    /*
   if(exchangeRates && exchangeRates.length==0 && setExchangeRates){
    setExchangeRates([newItem])
   }

   else if(exchangeRates && setExchangeRates )     {
     setExchangeRates([...exchangeRates, newItem]);
   }*/
     navigateToCreate();
 }
  
  useEffect(() => {
    // Update the document title using the browser API
       const newItem = {
      imageName: "australian-flag.png",
      currency: "AUD",
      buyValue: 10,
      sellValue: 15,
    };
if(setExchangeRates && exchangeRates){
 setExchangeRates([...exchangeRates, newItem]);
}

 //setExchangeRates(exchangeRates => [...exchangeRates, newItem]);

  },[]);

  return (
  <View style= {AppStyles.exchange_rate_div }>

   <ScrollView>
       {
      exchangeRates && setExchangeRates && 
      
       exchangeRates.map((rate) => 
         <ExchangeRate
         setExchangeRates={setExchangeRates}
         exchangeRates={exchangeRates}
         imageName= {rate.imageName}
         currency=  {rate.currency}
         buyValue= {rate.buyValue}
         sellValue= {rate.sellValue}
         navigateToEdit={navigateToEdit}
         selectedRate={selectedRate}
         setSelectedRate={ setSelectedRate}
       />
)}

</ScrollView>

  <PlusButton
  onPressFunction={()=>{addExchangeRate("australian-flag.png", "AUD", 2, 22 )
}}
  />
 </View>
  )
}

export default RateContainer