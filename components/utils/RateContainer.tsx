
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
  ScrollView
} from 'react-native';
 import AppStyles from '../../styles/AppStyles.tsx';
import ExchangeRate from './ExchangeRate.tsx';
import PlusButton from './PlusButton.tsx';

const RateContainer = () => {
  return (
  <View style= {AppStyles.exchange_rate_div }>
  <PlusButton/>
   <ScrollView>


   <ExchangeRate/>
    <View style= {AppStyles.margin_top_spacing2 }>
   <ExchangeRate/>
  </View>
    <View style= {AppStyles.margin_top_spacing2 }>
   <ExchangeRate/>
  </View>

</ScrollView>
 </View>
  )
}

export default RateContainer