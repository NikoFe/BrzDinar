
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
 import AppStyles from '../../styles/AppStyles.tsx';
import ExchangeRate from './ExchangeRate.tsx';
import PlusButton from './PlusButton.tsx';

const RateContainer = () => {
  return (

  <View style= {AppStyles.exchange_rate_div }>
   

     <View style= {AppStyles.margin_bottom_spacing15  }>

        
   <ExchangeRate></ExchangeRate>

    <View style= {AppStyles.margin_top_spacing2 }></View>
   <ExchangeRate></ExchangeRate>
      </View>
   <PlusButton></PlusButton>

  </View>
  )
}

export default RateContainer