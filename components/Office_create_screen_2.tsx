import React from 'react';
import {useState} from 'react';
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
  Image,
} from 'react-native';
import AppStyles from '../styles/AppStyles.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App.tsx';
import Header from './utils/Header.tsx';
import Primary_button from './utils/Primary_button.tsx';
import Secondary_button from './utils/Secondary_button.tsx';
import DatePicker from './utils/DatePicker.tsx';

const Office_create_screen_2 = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {

  const [monday1, setMonday1] = React.useState('');
  const [monday2, setMonday2] = React.useState('');

  const [tuesday1, setTuesday1] = React.useState('');
  const [tuesday2, setTuesday2] = React.useState('');

  const [wednsday1, setWednsday1] = React.useState('');
  const [wednsday2, setWednsday2] = React.useState('');

  const [thursday1, setThursday1] = React.useState('');
  const [thursday2, setThursday2] = React.useState('');

  const [friday1, setFriday1] = React.useState('');
  const [friday2, setFriday2] = React.useState('');

  const [saturday1, setSaturday1] = React.useState('');
  const [saturday2, setSaturday2] = React.useState('');

  const [sunday1, setSunday1] = React.useState('');
  const [sunday2, setSunday2] = React.useState('');
  

  const checkInputs = async () => {
    try {

      if(monday1=="" ||monday2=="" || 
        tuesday1==""|| tuesday2==""|| 
        wednsday1==""|| wednsday2==""|| 
        thursday1==""|| thursday2==""|| 
        friday1==""|| friday2==""|| 
        saturday1==""|| saturday2==""|| 
        sunday1==""|| sunday2==""
      ){
         Alert.alert("empty fields")
      }

      else if(
      
       parseInt(monday1)>24 ||  parseInt(monday1)<0 ||
       parseInt(monday2)>24 ||  parseInt(monday2)<0 ||
       parseInt(tuesday1)>24 ||  parseInt(tuesday1)<0 ||
       parseInt(tuesday1)>24 ||  parseInt(tuesday1)<0 ||
       parseInt(wednsday1)>24 ||  parseInt(wednsday1)<0 ||       
       parseInt(wednsday2)>24 ||  parseInt(wednsday2)<0 ||
       parseInt(thursday1)>24 ||  parseInt(thursday1)<0 ||
       parseInt(thursday2)>24 ||  parseInt(thursday2)<0 ||
       parseInt(friday1)>24 ||  parseInt(friday1)<0 ||
       parseInt(friday2)>24 ||  parseInt(friday2)<0 ||
       parseInt(saturday1)>24 ||  parseInt(saturday1)<0 ||
       parseInt(saturday2)>24 ||  parseInt(saturday2)<0 ||
       parseInt(sunday1)>24 ||  parseInt(sunday1)<0 ||
       parseInt(sunday2)>24 ||  parseInt(sunday2)<0 
      ){
         Alert.alert("numbers to small or too big")
      }

      else {
      //  Alert.alert("SUCCESS") 
       navigation.navigate('Office_create_3');
      }

    } catch (error: any) {
    Alert.alert("invalid inputs")
    }
  };

  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{flex: 1}}>
        <Header text="Create exchange offices"></Header>
        <View style={[AppStyles.grayBackground, {flex: 1}]}>
          <Image
            source={require('../resources/png/progress-2.png')}
            style={[
              AppStyles.horizontaly_centered,
              AppStyles.progress_image,
              AppStyles.margin_top_spacing6,
            ]}
          />

          <View style={[AppStyles.margin_top_spacing2, AppStyles.date_row]}>
            <Text style={[AppStyles.paragraph_4, AppStyles.white]}>MON:</Text>
            <DatePicker
              setLeftValue={setMonday1}
              setRightValue={setMonday2}
            ></DatePicker>
          </View>
          <View style={[AppStyles.margin_top_spacing2, AppStyles.date_row]}>
            <Text style={[AppStyles.paragraph_4, AppStyles.white]}>TUE:</Text>
            <DatePicker
              setLeftValue={setTuesday1}
              setRightValue={setTuesday2}
            ></DatePicker>
          </View>
          <View style={[AppStyles.margin_top_spacing2, AppStyles.date_row]}>
            <Text style={[AppStyles.paragraph_4, AppStyles.white]}>WED:</Text>
            <DatePicker
              setLeftValue={setWednsday1}
              setRightValue={setWednsday2}
            ></DatePicker>
          </View>
          <View style={[AppStyles.margin_top_spacing2, AppStyles.date_row]}>
            <Text style={[AppStyles.paragraph_4, AppStyles.white]}>THIR:</Text>
            <DatePicker
              setLeftValue={setThursday1}
              setRightValue={setThursday2}
            ></DatePicker>
          </View>
          <View style={[AppStyles.margin_top_spacing2, AppStyles.date_row]}>
            <Text style={[AppStyles.paragraph_4, AppStyles.white]}>FRI:</Text>
            <DatePicker
              setLeftValue={setFriday1}
              setRightValue={setFriday2}  
            ></DatePicker>
          </View>
          <View style={[AppStyles.margin_top_spacing2, AppStyles.date_row]}>
            <Text style={[AppStyles.paragraph_4, AppStyles.white]}>SAT:</Text>
            <DatePicker
              setLeftValue={setSaturday1}
              setRightValue={setSaturday2}
              ></DatePicker>
          </View>
          <View style={[AppStyles.margin_top_spacing2, AppStyles.date_row]}>
            <Text style={[AppStyles.paragraph_4, AppStyles.white]}>SUN:</Text>
            <DatePicker
              setLeftValue={setSunday1}
              setRightValue={setSunday2}
            ></DatePicker>
          </View>

          <View style={[AppStyles.margin_top_spacing4]}>
            <Primary_button
              onPressFunction={() => {
               // navigation.navigate('Office_create_3');
               checkInputs()
              }}
              text="Next"></Primary_button>
          </View>

          <View style={[AppStyles.margin_top_spacing4]}>
            <Secondary_button
              onPressFunction={() => {
                navigation.navigate('Office_create_1');
              }}
              text="Back"></Secondary_button>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Office_create_screen_2;
