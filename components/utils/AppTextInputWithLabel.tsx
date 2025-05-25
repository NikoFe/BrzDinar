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

const AppTextInputWithLabel = (
{
label}
:
{

label:string
}

) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
  <View style={AppStyles.horizontaly_centered}>
 <Text
     style={[
     AppStyles.paragraph_4_label,
     AppStyles.white,
     AppStyles.margin_bottom_spacing1
     ]}>
     {label}
 </Text>

   <TextInput
   style={AppStyles.textInput}
   onChangeText={onChangeText}
   value={text}
   />

 </View>
  )
}

export default AppTextInputWithLabel