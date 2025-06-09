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
  Platform,
  ScrollView,
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

  const [selectedRate, setSelectedRate] =
   useState<{ imageName: string; currency: string,buyValue:number, sellValue:number}>({imageName:"",currency:"",buyValue:0,sellValue:0});

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
    navigation.navigate("Create_exchange",
   {
    exchangeRates,
    setExchangeRates
   }
    )
  }

  const navigateToEdit  =(currency:string, flag:string , buyValue :number,sellValue:number)=>{
  //   Alert.alert("3: "+currency)
    navigation.navigate("Update_exchange",
   {
    exchangeRates,
    setExchangeRates,
    currency,
    buyValue,
    sellValue,
    flag,
    //
    //setSelectedRate
   }
  )
  }
   const checkResult = async () =>{
     //let concat="name: "+name+" location: "+location+" email: "+" description: "+description    +"phone:"+phone
     //Alert.alert("FINAL: "+concat)
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
         exchangeRates,
         approved:false
       });
 
       Alert.alert('Success', 'Registration successful!');
       navigation.navigate('Waiting');
     } catch (error: any) {
       console.error(error);
       Alert.alert('Napaka pri registraciji', error.message);
     }
   };

  return (
    <>
      <StatusBar 
        hidden={false}
        barStyle="light-content"
        translucent={true}
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: AppStyles.headerBackground.backgroundColor,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}
      >
        <Header text="Create exchange offices"></Header>

        <View style={[AppStyles.grayBackground, {flex: 1}]}>
          <View style={{flex: 1}}>
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

            <View style={[AppStyles.margin_top_spacing5]}>
              <RateContainer
                exchangeRates={exchangeRates}
                setExchangeRates={setExchangeRates}
                navigateToEdit={() => navigateToEdit(selectedRate.currency, selectedRate.imageName, selectedRate.buyValue, selectedRate.sellValue)}
                navigateToCreate={navigateToCreate}
                setSelectedRate={setSelectedRate}
                isViewOnly={false}
              />
            </View>
          </View>

          <View style={{paddingBottom: 32}}>
            <View style={AppStyles.margin_top_spacing4}>
              <Primary_button
                onPressFunction={() => {
                  checkResult()
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
                  })
                }}
                text="Back"></Secondary_button>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Office_create_screen_3;
