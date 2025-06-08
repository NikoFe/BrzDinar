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
const Secondary_button = ({
  onPressFunction,
  text,
}: {
  onPressFunction: () => void;
  text: string;
}) => {
  return (
    <Pressable
      onPress={onPressFunction}
      style={({pressed}) => [
        pressed ? AppStyles.secondary_pressed : AppStyles.secondary_button,
      ]}>
      <Text style={AppStyles.paragraph_3}>{text}</Text>
    </Pressable>
  );
};

export default Secondary_button;
