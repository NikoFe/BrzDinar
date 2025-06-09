import {SetStateAction, useEffect} from 'react';
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
  Pressable,
  Image,
} from 'react-native';
import AppStyles from '../../styles/AppStyles.tsx';
import App from '../../App_backup1.tsx';
import {useAnimatedProps} from 'react-native-reanimated';


type DatePickerProps = {
  setLeftValue: (value: string) => void;
  setRightValue: (value: string) => void;
  leftValue: string;
  rightValue: string;
};


const DatePicker = (
{ setLeftValue, setRightValue, leftValue, rightValue }: DatePickerProps
) => {
  return (
    <View style={AppStyles.date_inputs}>
      <TextInput
        style={AppStyles.date_picker_cell}
        onChangeText={setLeftValue}
        value={leftValue}
        placeholder="HH"
        keyboardType="numeric"
        maxLength={2}
      />

      <Text style={[AppStyles.header_2_bold_Inter_white, AppStyles.date_dots]}>
        {' '}
        :
      </Text>
      <TextInput
        style={AppStyles.date_picker_cell}
        onChangeText={setRightValue}
        value={rightValue}
        placeholder="HH"
        keyboardType="numeric"
        maxLength={2}
      />
    </View>
  );
};

export default DatePicker;
