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
  Image
} from 'react-native';
 import AppStyles from '../../styles/AppStyles.tsx';

const Header = (
{
  text
}: {
   text: string
}


) => {
  return (
    
   <SafeAreaView>
    <View  style={AppStyles.customHeader}>
    <Image source={require('../../resources/png/arrow-left.png')}  style={AppStyles.backArrow} ></Image>
      <Text style={AppStyles.whiteText}  >{text}</Text>
    </View>
   </SafeAreaView>

  )
}

export default Header