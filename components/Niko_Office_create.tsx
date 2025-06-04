import React, { useState } from 'react'
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


const Office_create_screen_1 = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');


  const checkInputs = async () => {
    try {

      if(name=="" ||location=="" ||  phoneNumber==""|| description==""){
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

  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{flex: 1}}>
        <Header text="Register Exchange Office" />
        <View style={[AppStyles.grayBackground, {flex: 1}]}>
          <Image
            source={require('../resources/png/progress-1.png')}
            style={[
              AppStyles.horizontaly_centered,
              AppStyles.progress_image,
              AppStyles.margin_top_spacing6,
            ]}
          />
          <View style={AppStyles.margin_top_spacing2}>
            <AppTextInputWithLabel
            //  defaultText="INSA menjalnica"
              onChangeText={setName}
              label="Name:"></AppTextInputWithLabel>
          </View>
          <View style={AppStyles.margin_top_spacing2}>
            <AppTextInputWithLabel
            //  defaultText="Celjska ulica"
                onChangeText={setLocation}
                label="Location:"></AppTextInputWithLabel>
          </View>

          <View style={AppStyles.margin_top_spacing2}>
            <AppTextInputWithLabel
             // defaultText="030-070-998"
              onChangeText={setPhoneNumber}
              label="Phone number:"></AppTextInputWithLabel>
          </View>
          <View style={AppStyles.margin_top_spacing2}>
            <AppTextArea

              onChangeText={setDescription}
              label={'description: '}
       
            />

          <View style={AppStyles.margin_top_spacing2}>
            <Primary_button
              onPressFunction={() => {
                //navigation.navigate('Office_create_2');
                checkInputs()
              }}
              text="Next"></Primary_button>
          </View>
          <View style={AppStyles.margin_top_spacing2}>
            <Secondary_button
              onPressFunction={() => {
                navigation.navigate('Exchange_role');
              }}
              text="Back"></Secondary_button>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Office_create_screen_1;
