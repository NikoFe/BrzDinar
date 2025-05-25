import {useEffect} from 'react'
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



const AppTextArea = (
{
label,
defaultText
}
:
{

label:string
defaultText:string

}
) => {
  const [text, onChangeText] = React.useState(defaultText);
  const [number, onChangeNumber] = React.useState('');

  
  useEffect(() => {
     onChangeText(defaultText)
  } ,[]);


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
   style={AppStyles.textArea}
   onChangeText={onChangeText}
   value={text}
   numberOfLines={4}
   multiline={true}
   />
 </View>
  )
}

export default AppTextArea

