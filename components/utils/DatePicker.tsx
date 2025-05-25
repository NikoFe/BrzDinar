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
  Pressable,
  Image
} from 'react-native';
 import AppStyles from '../../styles/AppStyles.tsx';
import App from '../../App_backup1.tsx';
import { useAnimatedProps } from 'react-native-reanimated';


const DatePicker = () => {
  const [leftText, changeLeftText] = React.useState("16:00");
  const [rightText, changeRightText] = React.useState("16:00");
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style= {AppStyles.date_inputs}>
   <TextInput
   style={AppStyles.date_picker_cell}
   onChangeText={changeLeftText}
   value={leftText}
   />

    <Text style={[AppStyles.header_2_bold_Inter_white, AppStyles.date_dots ]}> :
   
    </Text>
   <TextInput
   style={AppStyles.date_picker_cell}
   onChangeText={changeRightText}
   value={rightText}
   />
  </View>

  )
}

export default DatePicker