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
} from 'react-native';
import AppStyles from '../../styles/AppStyles.tsx';

const Primary_button = ({
  onPressFunction,
  text,
}: {
  onPressFunction: () => void;
  text: string;
}) => {
  return (
    <Pressable
      onPress={onPressFunction}
      style={({ pressed }) => [
        AppStyles.primary_button,
        pressed && AppStyles.primary_pressed,
      ]}
    >
      <Text style={[AppStyles.paragraph_3, AppStyles.white]}>{text}</Text>
    </Pressable>
  );
};


export default Primary_button;
