import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import AppStyles from '../styles/AppStyles.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App.tsx';
import Header from './utils/Header.tsx';
import Primary_button from './utils/Primary_button.tsx';
import Secondary_button from './utils/Secondary_button.tsx';
import AppTextInputWithLabel from './utils/AppTextInputWithLabel.tsx';
import AppTextArea from './utils/AppTextArea.tsx';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const Office_create_screen_1 = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {
  const [name, setName] = useState('INSA menjalnica');
  const [email, setEmail] = useState('janez@example.com');
  const [password, setPassword] = useState('password');
  const [repeatPassword, setRepeatPassword] = useState('password');
  const [location, setLocation] = useState('Celjska ulica');
  const [phone, setPhone] = useState('030-070-998');
  const [description, setDescription] = useState(
    'Menjalnica za evropske valute, ki se nahaja v mestu Mariboru',
  );

  const checkInputs = async () => {
    try {

      if(name=="" ||location=="" ||  phone==""|| description==""){
         Alert.alert("empty fields")
      }
      else {
     //  Alert.alert("SUCCESS") 
       navigation.navigate('Office_create_2');
      }

    } catch (error: any) {
    Alert.alert("error")
    }
  };

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
      });

      Alert.alert('Uspeh', 'Registracija uspešna!');
      navigation.navigate('Exchange_office');
    } catch (error: any) {
      console.error(error);
      Alert.alert('Napaka pri registraciji', error.message);
    }
  };

  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{flex: 1}}>
        <Header text="Register Exchange Office" />
        <View style={[AppStyles.grayBackground, {flex: 1}]}>
          <ScrollView contentContainerStyle={{paddingBottom: 32}}>
            <Image
              source={require('../resources/png/progress-1.png')}
              style={[
                AppStyles.horizontaly_centered,
                AppStyles.progress_image,
                AppStyles.margin_top_spacing6,
              ]}
            />

            <View style={AppStyles.margin_top_spacing2}>
              <AppTextInputWithLabel label="Name:" value={name} onChangeText={setName} />
            </View>

            <View style={AppStyles.margin_top_spacing2}>
              <AppTextInputWithLabel label="Email:" value={email} onChangeText={setEmail} />
            
            
            </View>

            <View style={AppStyles.margin_top_spacing2}>
              <AppTextInputWithLabel
                label="Password:"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <View style={AppStyles.margin_top_spacing2}>
              <AppTextInputWithLabel
                label="Repeat Password:"
                value={repeatPassword}
                onChangeText={setRepeatPassword}
                secureTextEntry
              />
            </View>

            <View style={AppStyles.margin_top_spacing2}>
              <AppTextInputWithLabel
                label="Location:"
                value={location}
                onChangeText={setLocation}
              />
            </View>

            <View style={AppStyles.margin_top_spacing2}>
              <AppTextInputWithLabel
                label="Phone number:"
                value={phone}
                onChangeText={setPhone}
              />
            </View>

            <View style={AppStyles.margin_top_spacing2}>
              <AppTextArea
                label="Description:"
                defaultText={description}
                onChangeText={setDescription}
              />
            </View>

            <View style={AppStyles.margin_top_spacing2}>
              <Primary_button text="Next" onPressFunction={
              
               //handleRegister
              checkInputs
                
                } />
            </View>

            <View style={AppStyles.margin_top_spacing2}>
              <Secondary_button
                text="Back"
                onPressFunction={() => {
                  navigation.navigate('Exchange_role');
                }}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Office_create_screen_1;
