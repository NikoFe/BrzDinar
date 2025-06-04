import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import AppStyles from '../../styles/AppStyles.tsx';

interface AppTextInputWithLabelProps extends TextInputProps {
  label: string;

}

const AppTextInputWithLabel = ({ label, ...textInputProps }: AppTextInputWithLabelProps) => {
  return (
    <View style={AppStyles.horizontaly_centered}>
      <Text
        style={[
          AppStyles.paragraph_4_label,
          AppStyles.white,
          AppStyles.margin_bottom_spacing1,
        ]}>
        {label}
      </Text>

      <TextInput
        style={AppStyles.textInput}
        {...textInputProps}
      
      />
    </View>
  );
};

export default AppTextInputWithLabel;
