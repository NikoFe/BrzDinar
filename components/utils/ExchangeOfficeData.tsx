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
import AppTextInputWithLabel from './AppTextInputWithLabel.tsx';
import Primary_button from './Primary_button.tsx';
import RateContainer from './RateContainer.tsx';

const ExchangeOfficeData = () => {
  return (
    <ScrollView>
      <View
        style={[AppStyles.horizontaly_centered, AppStyles.margin_top_spacing3,  AppStyles.ExchangeOfficeData_height]}>
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

        <View
          style={[
            AppStyles.horizontaly_centered,
            AppStyles.margin_top_spacing3,
          ]}>
          <AppTextInputWithLabel
            label="Location"
            defaultText="Pobreška cesta 18,2000..."></AppTextInputWithLabel>
        </View>

        <View
          style={[
            AppStyles.horizontaly_centered,
            AppStyles.margin_top_spacing3,
          ]}>
          <AppTextInputWithLabel
            label="Phone number:"
            defaultText="030-689-421"></AppTextInputWithLabel>
        </View>

        <View
          style={[
            AppStyles.horizontaly_centered,
            AppStyles.margin_top_spacing3,
          ]}>
          <Primary_button
            onPressFunction={() => {}}
            text="Change"></Primary_button>
        </View>
        <View
          style={[
            AppStyles.horizontaly_centered,
            AppStyles.margin_top_spacing3,
          ]}>
          <RateContainer></RateContainer>
          
        </View>
      </View>
    </ScrollView>
  );
};

export default ExchangeOfficeData;
