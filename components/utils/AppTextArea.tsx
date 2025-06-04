import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import AppStyles from '../../styles/AppStyles.tsx';
import { TextInputProps } from 'react-native';

interface AppTextInputWithLabelProps extends TextInputProps {
  label: string;
  defaultText: string; 
}

/*
const AppTextArea = () => {
  const [number, onChangeNumber] = React.useState('');


*/
type AppTextAreaProps = {
  label: string;
  defaultText: string;
  onChangeText: (text: string) => void;
};

const AppTextArea = (
  {label, defaultText, onChangeText, ...textInputProps}: AppTextAreaProps) => {
  useEffect(() => {
    onChangeText(defaultText);
  }, [defaultText]);

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
        {...textInputProps}
        style={AppStyles.textArea}
        onChangeText={onChangeText}
        defaultValue={defaultText}
        numberOfLines={4}
        multiline
      />
    </View>
  );
};

export default AppTextArea;
