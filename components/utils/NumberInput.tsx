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


const NumberInput = (
{
label,
defaultNumber
}
:
{
label:string
defaultNumber:number
}

) => {

  const [number, onChangeNumber] = React.useState(defaultNumber);

  useEffect(() => {
     onChangeNumber(defaultNumber)
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
   style={AppStyles.textInput}
   value={number.toString()}
    keyboardType="numeric" // shows number pad
   />
 </View>

  )
}

export default NumberInput