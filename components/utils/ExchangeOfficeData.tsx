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
  ScrollView,
} from 'react-native';
import AppStyles from '../../styles/AppStyles.tsx';
import ExchangeRate from './ExchangeRate.tsx';
import PlusButton from './PlusButton.tsx';


const ExchangeOfficeData = () => {
  return (
 
      <View
        style={[AppStyles.horizontaly_centered, AppStyles.margin_top_spacing3,  AppStyles.ExchangeOfficeData_height,AppStyles.greenBackground ]}>
        <View style={AppStyles.office_data_header}>
          <Text style={[AppStyles.red, AppStyles.paragraph_4]}>
            INSA menjalnica
          </Text>
        </View>

        <View style={AppStyles.office_data_gray_row}>
          <Text style={[AppStyles.white, AppStyles.paragraph_5]}>
            Location:
          </Text>
        </View>
        <View style={AppStyles.office_data_white_row}>
          <Text style={[, AppStyles.paragraph_5, AppStyles.boldFontWeight]}>
            Pobreška cesta 18, 2000 Maribor
          </Text>
        </View>

        <View style={AppStyles.office_data_gray_row}>
          <Text style={[AppStyles.white, AppStyles.paragraph_5]}>Open at:</Text>
        </View>

        <View style={AppStyles.office_data_white_row}>
          <Text style={[AppStyles.paragraph_5]}>MON-FRI: 7:00-18:00</Text>
        </View>
        <View style={AppStyles.office_data_gray_row}>
          <Text style={[AppStyles.white, AppStyles.paragraph_5]}>
            SAT: 7:00-16:00
          </Text>
        </View>
      </View>

  );
};

export default ExchangeOfficeData;
