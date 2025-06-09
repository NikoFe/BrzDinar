import {useEffect} from 'react';
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

const NumberInput = ({
  label,
  value,
  setValue,
}: {
  label: string;
  value: number;
  setValue: (value: number) => void;
}) => {
  const [inputValue, setInputValue] = React.useState(value.toString());

  const handleTextChange = (text: string) => {
    // Allow only numbers and optional decimal point
    if (/^\d*\.?\d*$/.test(text) || text === '') {
      setInputValue(text);
      const numValue = parseFloat(text);
      if (!isNaN(numValue)) {
        setValue(numValue);
      }
    }
  };

  const handleBlur = () => {
    // Format to 2 decimal places when input loses focus
    const numValue = parseFloat(inputValue);
    if (!isNaN(numValue)) {
      setInputValue(numValue.toFixed(2));
      setValue(numValue);
    }
  };

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

      <View style={[AppStyles.number_textInput, { flexDirection: 'row', alignItems: 'center', padding: 0 }]}>
        <TextInput
          style={[
            AppStyles.paragraph_4,
            {
              flex: 1,
              textAlign: 'center',
              padding: 0,
              margin: 0,
              height: '100%',
            }
          ]}
          value={inputValue}
          onChangeText={handleTextChange}
          onBlur={handleBlur}
          keyboardType="decimal-pad"
          placeholder="0.00"
        />
        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
          <Pressable
            style={[AppStyles.up_pressable, { position: 'relative', left: 0, top: 0 }]}
            onPress={() => {
              const newValue = parseFloat(inputValue) + 1;
              setValue(newValue);
              setInputValue(newValue.toFixed(2));
            }}
          />
          <Pressable
            style={[AppStyles.down_pressable, { position: 'relative', left: 0, top: 0 }]}
            onPress={() => {
              const newValue = parseFloat(inputValue) - 1;
              setValue(newValue);
              setInputValue(newValue.toFixed(2));
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default NumberInput;
