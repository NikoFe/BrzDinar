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
 import AppStyles from '../styles/AppStyles.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from "../App.tsx"
import Header from './utils/Header.tsx';
import Primary_button from './utils/Primary_button.tsx';
import Secondary_button from './utils/Secondary_button.tsx';
import DatePicker from './utils/DatePicker.tsx';

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
   
          <Image
            source={require('../resources/png/progress-2.png')}
            style={[
              AppStyles.horizontaly_centered,
              AppStyles.progress_image,
              AppStyles.margin_top_spacing6,
            ]}
          /> 

          <View style={[AppStyles.margin_top_spacing2,AppStyles.date_row ]}>
         <Text style={[AppStyles.paragraph_4, AppStyles.white]}>MON:</Text>
         < DatePicker></DatePicker>
           </View>
          <View style={[AppStyles.margin_top_spacing2,AppStyles.date_row ]}>
         <Text style={[AppStyles.paragraph_4, AppStyles.white]}>MON:</Text>
         < DatePicker></DatePicker>
           </View>
          <View style={[AppStyles.margin_top_spacing2,AppStyles.date_row ]}>
         <Text style={[AppStyles.paragraph_4, AppStyles.white]}>MON:</Text>
         < DatePicker></DatePicker>
           </View>
         <View style={[AppStyles.margin_top_spacing2,AppStyles.date_row ]}>
         <Text style={[AppStyles.paragraph_4, AppStyles.white]}>MON:</Text>
         < DatePicker></DatePicker>
           </View>
         <View style={[AppStyles.margin_top_spacing2,AppStyles.date_row ]}>
         <Text style={[AppStyles.paragraph_4, AppStyles.white]}>MON:</Text>
         < DatePicker></DatePicker>
           </View>
         <View style={[AppStyles.margin_top_spacing2,AppStyles.date_row ]}>
         <Text style={[AppStyles.paragraph_4, AppStyles.white]}>MON:</Text>
         < DatePicker></DatePicker>
           </View>
         <View style={[AppStyles.margin_top_spacing2,AppStyles.date_row ]}>
         <Text style={[AppStyles.paragraph_4, AppStyles.white]}>MON:</Text>
         < DatePicker></DatePicker>
           </View>

       <View style={[AppStyles.margin_top_spacing4 ]}>
          <Primary_button
           onPressFunction= {()=>{navigation.navigate("Office_create_3")}}
           text= "Next"
          ></Primary_button>
       </View>

       <View style={[AppStyles.margin_top_spacing4 ]}>
          <Secondary_button
           onPressFunction= {()=>{navigation.navigate("Office_create_1")}}
           text= "Back"
          ></Secondary_button>
      </View>


      </View>
      </SafeAreaView>
    </>
  )
}

export default Office_create_screen_2