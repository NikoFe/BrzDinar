import React from 'react';
import { View, Text } from 'react-native';
import AppStyles from '../../styles/AppStyles.tsx';

const ExchangeOfficeData = ({ data }: { data: any }) => {
  if (!data) {
    return (
      <View style={AppStyles.horizontaly_centered}>
        <Text style={AppStyles.paragraph_5}>No data available.</Text>
      </View>
    );
  }

  return (
    <View
      style={[
        AppStyles.horizontaly_centered,
        AppStyles.margin_top_spacing3,
        AppStyles.ExchangeOfficeData_height,
        AppStyles.greenBackground,
      ]}
    >
      <View style={AppStyles.office_data_header}>
        <Text style={[AppStyles.red, AppStyles.paragraph_4]}>
          {data.name}
        </Text>
      </View>

      <View style={AppStyles.office_data_gray_row}>
        <Text style={[AppStyles.white, AppStyles.paragraph_5]}>Location:</Text>
      </View>
      <View style={AppStyles.office_data_white_row}>
        <Text style={[AppStyles.paragraph_5, AppStyles.boldFontWeight]}>
          {data.location}
        </Text>
      </View>

      <View style={AppStyles.office_data_gray_row}>
        <Text style={[AppStyles.white, AppStyles.paragraph_5]}>Phone:</Text>
      </View>
      <View style={AppStyles.office_data_white_row}>
        <Text style={[AppStyles.paragraph_5]}>
          {data.phone}
        </Text>
      </View>

      <View style={AppStyles.office_data_gray_row}>
        <Text style={[AppStyles.white, AppStyles.paragraph_5]}>Email:</Text>
      </View>
      <View style={AppStyles.office_data_white_row}>
        <Text style={[AppStyles.paragraph_5]}>
          {data.email}
        </Text>
      </View>

      <View style={AppStyles.office_data_gray_row}>
        <Text style={[AppStyles.white, AppStyles.paragraph_5]}>Description:</Text>
      </View>
      <View style={AppStyles.office_data_white_row}>
        <Text style={[AppStyles.paragraph_5]}>
          {data.description}
        </Text>
      </View>
    </View>
  );
};

export default ExchangeOfficeData;
