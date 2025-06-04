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

const EditButton = (
{
  onPressFunction,

}: {
  // onPressFunction : React.MouseEventHandler;
  onPressFunction: (variable:string) => void;
}
) => {
  return (
    <Pressable
          onPress={()=>{onPressFunction}}
    >
    <View style={AppStyles.action_button}>
      <Image
        source={require('../../resources/png/edit-button.png')}
        style={[AppStyles.horizontaly_centered]}
      />
    </View>
    </Pressable>
  );
};

export default EditButton;
