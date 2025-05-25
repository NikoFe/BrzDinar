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
import {RootStackParamList} from "../App.tsx"
import Header from './utils/Header.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AppDropdown from './utils/AppDropdown.tsx';
import Primary_button from './utils/Primary_button.tsx';



const Approved_screen = (
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
          text="Admin approved"
        ></Header>
        <View style={[AppStyles.grayBackground, {flex: 1}]}>

 
          <Text style={[ AppStyles.header_3_bold_Inter_white,AppStyles.margin_top_spacing13,AppStyles.horizontaly_centered]}> Congratulations</Text>
          <Text style={[AppStyles.paragraph_4,AppStyles.white,AppStyles.margin_top_spacing13  ]}>
                    The admin has reviewed your form and approved it’s creation.
          </Text>
        <Text style={[AppStyles.paragraph_4,AppStyles.white, AppStyles.margin_top_spacing5 ]}>
              Here is the following name and password for the given exchange office:
          </Text>

 <View style={[AppStyles.margin_top_spacing5]}>
    <AppDropdown 
    input="Show office name:"
    />
</View>

 <View style={[AppStyles.margin_top_spacing5]}>
    <AppDropdown
    input="Show password:"/>
</View>
   
    <View style={[AppStyles.margin_top_spacing4]}>
          <Primary_button
           onPressFunction= {()=>{navigation.navigate("Login")}}
           text= "Login"
          ></Primary_button>
</View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default Approved_screen