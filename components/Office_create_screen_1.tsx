import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  ScrollView,
  Alert,
  Platform,
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
  const [name, setName] = useState('INSA menjalnica');
  const [location, setLocation] = useState('Celjska ulica');
  const [email, setEmail] = useState('janez@example.com');
  const [description, setDescription] = useState(
    'Menjalnica za evropske valute, ki se nahaja v mestu Mariboru',
  );

    const [phone, setPhone] = useState('030-070-998');
  const [password, setPassword] = useState('password');
  const [repeatPassword, setRepeatPassword] = useState('password');

  const checkInputs = async () => {
    try {

      if(name=="" ||location=="" ||  phone==""|| description==""){
         Alert.alert("empty fields")
      }
      else {
     //  Alert.alert("SUCCESS") 
     //  navigation.navigate('Office_create_2');
      navigation.navigate('Office_create_2', {
        name,
        location,
        email,
        description,
        phone,
        password,
        repeatPassword,
      });
      }

    } catch (error: any) {
    Alert.alert("error")
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
