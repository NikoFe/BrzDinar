import React from 'react'
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
  Pressable
} from 'react-native';
 import AppStyles from '../../styles/AppStyles.tsx';


const AppTextInput = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
  <View style={AppStyles.horizontaly_centered}>
   <TextInput
   style={AppStyles.textInput}
   onChangeText={onChangeText}
   value={text}
   />
 </View>
  )
}

export default AppTextInput