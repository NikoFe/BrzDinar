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
  Image,
  Pressable
} from 'react-native';
import AppStyles from '../../styles/AppStyles.tsx';

const Delete_button = (
{
  onPressFunction,

}: {
  // onPressFunction : React.MouseEventHandler;
  onPressFunction: () => void;
}
) => {
  return (
    <Pressable
         onPress={onPressFunction}
    >
    <View style={AppStyles.action_button}>
      <Image
        source={require('../../resources/png/delete-button.png')}
        style={[AppStyles.horizontaly_centered]}
      />
    </View>
    </Pressable>
  );
};

export default Delete_button;
