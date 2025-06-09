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

const getFlagForCurrency = (currency: string): string => {
  switch (currency) {
    case 'USD':
      return 'us-flag.png';
    case 'EUR':
      return 'eu-flag.png';
    case 'AUD':
      return 'australian-flag.png';
    default:
      return 'australian-flag.png';
  }
};

const RateContainer = (
{
navigateToCreate,
exchangeRates,
setExchangeRates,
setSelectedRate,
isViewOnly = false
}: {
   navigateToCreate: ()=>void; 
   navigateToEdit?: ()=>void; 
   exchangeRates: Array<{ imageName: string; currency: string,buyValue:number, sellValue:number}>,
   setExchangeRates: (variable:Array<{ imageName: string; currency: string,buyValue:number, sellValue:number}>)=>void;
   setSelectedRate: (variable:{ imageName: string; currency: string,buyValue:number, sellValue:number})=>void;
   isViewOnly?: boolean;
}
) => {
  const addExchangeRate = async (currency:string, buyValue:number, sellValue:number) => {
    if (isViewOnly) {
      Alert.alert('Info', 'This is a view-only screen');
      return;
    }
    const newItem = {
      imageName: getFlagForCurrency(currency),
      currency: currency,
      buyValue: buyValue,
      sellValue: sellValue,
    };
    navigateToCreate();
  }
  
  useEffect(() => {
    if (!isViewOnly && setExchangeRates && exchangeRates) {
      const newItem = {
        imageName: getFlagForCurrency("AUD"),
        currency: "AUD",
        buyValue: 10,
        sellValue: 15,
      };
      setExchangeRates([...exchangeRates, newItem]);
    }
  }, []);

  return (
    <View style={[AppStyles.exchange_rate_div, {height: '100%'}]}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 60}}>
        {exchangeRates && setExchangeRates && 
          exchangeRates.map((rate, index) => 
            <ExchangeRate
              key={`${rate.currency}-${rate.buyValue}-${rate.sellValue}-${index}`}
              setExchangeRates={setExchangeRates}
              exchangeRates={exchangeRates}
              imageName={rate.imageName}
              currency={rate.currency}
              buyValue={rate.buyValue}
              sellValue={rate.sellValue}
              setSelectedRate={setSelectedRate}
              isViewOnly={isViewOnly}
            />
          )
        }
      </ScrollView>
      {!isViewOnly && (
        <View style={{position: 'absolute', bottom: 10, width: '100%', alignItems: 'center'}}>
          <PlusButton
            onPressFunction={() => addExchangeRate("AUD", 2, 22)}
          />
        </View>
      )}
    </View>
  )
}

export default RateContainer;