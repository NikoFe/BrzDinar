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
  Pressable,
} from 'react-native';
import AppStyles from '../../styles/AppStyles.tsx';

const PlusButton = (

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
    <View style={[AppStyles.action_button, AppStyles.exchange_plus_button]}>
      <Image
        source={require('../../resources/png/plus-button.png')}
        style={[]}
      />
    </View>
    </Pressable>
  );
};

export default PlusButton;
