import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import AppStyles from '../../styles/AppStyles.tsx';

type AppTextAreaProps = {
  label: string;
  defaultText: string;
  onChangeText: (text: string) => void;
};

const AppTextArea = ({label, defaultText, onChangeText}: AppTextAreaProps) => {
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
