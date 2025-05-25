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
import Header from './utils/Header.tsx';
import Primary_button from './utils/Primary_button.tsx';
import Secondary_button from './utils/Secondary_button.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from "../App.tsx"



const Onboarding_screen = (
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
    
        <View style={[AppStyles.grayBackground, {flex: 1}]}>
          <Text
          style ={[AppStyles.header_3_bold_Inter_white,AppStyles.horizontaly_centered,AppStyles.margin_top_spacing36]}  
          >
            What is your role?</Text>
          <View
          style ={[AppStyles.margin_top_spacing3]}  
          >
          <Primary_button
           onPressFunction= {()=>{navigation.navigate("User_role")}}
           text= "Regular user"
          ></Primary_button>
          </View>
       <View
          style ={[AppStyles.margin_top_spacing3]}  
          >
          <Secondary_button
           onPressFunction= {()=>{navigation.navigate("Exchange_role")}}
           text= "Exchange office"
          ></Secondary_button>
      </View>
          <Secondary_button
           onPressFunction= {()=>{navigation.navigate("Create_exchange")}}
           text= "Create_exchange"
          ></Secondary_button>

          <Secondary_button
           onPressFunction= {()=>{navigation.navigate("Approved")}}
           text= "Approved"
          ></Secondary_button>



        </View>
      </SafeAreaView>
    </>
  );
};

export default Onboarding_screen;
