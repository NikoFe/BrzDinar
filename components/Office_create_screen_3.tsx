

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
import RateContainer from './utils/RateContainer.tsx';
import { RouteProp } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

type OfficeCreate3RouteProp = RouteProp<RootStackParamList, 'Office_create_3'>;


type Props = {
  route: OfficeCreate3RouteProp;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Office_create_3'>;
};

const Office_create_screen_3 = ({ route, navigation }: Props) => {

  const [exchangeRates, setExchangeRates] =
   useState<Array<{ imageName: string; currency: string,buyValue:number, sellValue:number}>>([]);

  const {
    name,
    location,
    email,
    description,
    phone,
    password,
    repeatPassword,
    monday1,
    monday2,
    tuesday1,
    tuesday2,
    wednsday1,
    wednsday2,
    thursday1,
    thursday2,
    friday1,
    friday2,
    saturday1,
    saturday2,
    sunday1,
    sunday2, 

  } = route.params;


  const navigateToCreate=()=>{
    navigation.navigate("Create_exchange")
  }
  const navigateToEdit  =()=>{
    Alert.alert("AAA")
    navigation.navigate("Update_exchange")
  }

   const checkResult = async () =>{
 
     let concat="name: "+name+" location: "+location+" email: "+" description: "+description    +"phone:"+phone

     Alert.alert("FINAL: "+concat)
     await  handleRegister()
   }


   const handleRegister = async () => {
     if (password !== repeatPassword) {
       Alert.alert('Napaka', 'Gesli se ne ujemata');
       return;
     }
 
     try {
       const userCredential = await auth().createUserWithEmailAndPassword(
         email,
         password,
       );
 
       const uid = userCredential.user.uid;
 
       await firestore().collection('exchange_offices').doc(uid).set({
         name,
         email,
         location,
         phone,
         description,
         createdAt: firestore.Timestamp.now(),
         ///odstrani to odstpodaj če potrebno:
        // password, NAJVERJETNEJE najbolje, da ni tu gesla shranjenega
        // repeatPassword,
         monday1,
         monday2,
         tuesday1,
         tuesday2,
         wednsday1,
         wednsday2,
         thursday1,
         thursday2,
         friday1,
         friday2,
         saturday1,
         saturday2,
         sunday1,
         sunday2, 
         exchangeRates
       });
 
       Alert.alert('Uspeh', 'Registracija uspešna!');
       navigation.navigate('Exchange_office');
     } catch (error: any) {
       console.error(error);
       Alert.alert('Napaka pri registraciji', error.message);
     }
   };



   /* password,
    repeatPassword,
    monday1,
    monday2,
    tuesday1,
    tuesday2,
    wednsday1,
    wednsday2,
    thursday1,
    thursday2,
    friday1,
    friday2,
    saturday1,
    saturday2,
    sunday1,
    sunday2, */

  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{flex: 1}}>
        <Header text="Create exchange offices"></Header>

        <View style={[AppStyles.grayBackground, {flex: 1}]}>
          <Image
            source={require('../resources/png/progress-3.png')}
            style={[
              AppStyles.horizontaly_centered,
              AppStyles.progress_image,
              AppStyles.margin_top_spacing6,
            ]}
          />
          <View style={AppStyles.margin_top_spacing4}>
            <Text
              style={[
                AppStyles.header_3_bold_Inter_white,
                AppStyles.white,
                AppStyles.horizontaly_centered,
              ]}>
              Exchange rates:
            </Text>
          </View>

          <View style={AppStyles.margin_top_spacing5}>
            <RateContainer
            exchangeRates={exchangeRates}
            setExchangeRates={setExchangeRates}
            navigateToEdit={navigateToEdit}
            navigateToCreate={navigateToCreate}
            
            ></RateContainer>
          </View>

          <View style={AppStyles.margin_top_spacing4}>
            <Primary_button
              onPressFunction={() => {


                checkResult()
              //  navigation.navigate('Waiting');
              }}
              text="Next"></Primary_button>
          </View>

          <View style={AppStyles.margin_top_spacing2}>
            <Secondary_button
              onPressFunction={() => {
                navigation.navigate('Office_create_2', {
                name,
                location,
                email,
                description,
                phone,
                password,
                repeatPassword,
                }
              )
            //    navigation.navigate('Office_create_2');
              }}
              text="Back"></Secondary_button>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Office_create_screen_3;
