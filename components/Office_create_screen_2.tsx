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
} from 'react-native';
 import AppStyles from '../styles/AppStyles.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from "../App.tsx"
import Header from './utils/Header.tsx';
import Primary_button from './utils/Primary_button.tsx';
import Secondary_button from './utils/Secondary_button.tsx';


const Office_create_screen_2 = (
    {
    navigation,
  }: {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
  }
) => {
  return (
       <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{flex: 1}}>
        <Header
          text="Create exchange offices"
        ></Header>
        <View style={[AppStyles.grayBackground, {flex: 1}]}>
          <Text>Creating2</Text>
        </View>

          <Primary_button
           onPressFunction= {()=>{navigation.navigate("Office_create_3")}}
           text= "Next"
          ></Primary_button>

          <Secondary_button
           onPressFunction= {()=>{navigation.navigate("Office_create_1")}}
           text= "Back"
          ></Secondary_button>

      </SafeAreaView>
    </>
  )
}

export default Office_create_screen_2