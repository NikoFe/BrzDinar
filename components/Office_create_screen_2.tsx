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
  KeyboardAvoidingView,
} from 'react-native';
import AppStyles from '../styles/AppStyles.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App.tsx';
import Header from './utils/Header.tsx';
import Primary_button from './utils/Primary_button.tsx';
import Secondary_button from './utils/Secondary_button.tsx';
import DatePicker from './utils/DatePicker.tsx';
import { RouteProp } from '@react-navigation/native';

type OfficeCreate2RouteProp = RouteProp<RootStackParamList, 'Office_create_2'>;

const Office_create_screen_2 = ({
  route,
  navigation,
}: {
  route: OfficeCreate2RouteProp;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Office_create_2'>;
}) => {
  const {
    name,
    location,
    email,
    description,
    phone,
    password,
    repeatPassword,
  } = route.params;

  // Default working hours
  const [monday1, setMonday1] = React.useState('09:00');
  const [monday2, setMonday2] = React.useState('20:00');

  const [tuesday1, setTuesday1] = React.useState('09:00');
  const [tuesday2, setTuesday2] = React.useState('20:00');

  const [wednsday1, setWednsday1] = React.useState('09:00');
  const [wednsday2, setWednsday2] = React.useState('20:00');

  const [thursday1, setThursday1] = React.useState('09:00');
  const [thursday2, setThursday2] = React.useState('20:00');

  const [friday1, setFriday1] = React.useState('09:00');
  const [friday2, setFriday2] = React.useState('20:00');

  const [saturday1, setSaturday1] = React.useState('09:00');
  const [saturday2, setSaturday2] = React.useState('15:00');

  const [sunday1, setSunday1] = React.useState('');
  const [sunday2, setSunday2] = React.useState('');

  const checkInputs = async () => {
    try {
      // Validate time format for filled fields
      const validateTime = (time: string) => {
        if (time === '') return true;
        const [hours, minutes] = time.split(':').map(Number);
        return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
      };

      // Check each day's times
      if (!validateTime(monday1) || !validateTime(monday2)) {
        Alert.alert("Invalid time format for Monday");
        return;
      }
      if (!validateTime(tuesday1) || !validateTime(tuesday2)) {
        Alert.alert("Invalid time format for Tuesday");
        return;
      }
      if (!validateTime(wednsday1) || !validateTime(wednsday2)) {
        Alert.alert("Invalid time format for Wednesday");
        return;
      }
      if (!validateTime(thursday1) || !validateTime(thursday2)) {
        Alert.alert("Invalid time format for Thursday");
        return;
      }
      if (!validateTime(friday1) || !validateTime(friday2)) {
        Alert.alert("Invalid time format for Friday");
        return;
      }
      if (!validateTime(saturday1) || !validateTime(saturday2)) {
        Alert.alert("Invalid time format for Saturday");
        return;
      }
      if (!validateTime(sunday1) || !validateTime(sunday2)) {
        Alert.alert("Invalid time format for Sunday");
        return;
      }

      navigation.navigate('Office_create_3', {
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
      });
    } catch (error: any) {
      Alert.alert("Invalid inputs");
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
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}
        >
          <ScrollView 
            style={[AppStyles.grayBackground, {flex: 1}]}
            contentContainerStyle={{paddingBottom: 20}}
            keyboardShouldPersistTaps="handled"
          >
            <Image
              source={require('../resources/png/progress-2.png')}
              style={[
                AppStyles.horizontaly_centered,
                AppStyles.progress_image,
                AppStyles.margin_top_spacing6,
              ]}
            />

            <View style={[AppStyles.margin_top_spacing2, AppStyles.date_row, AppStyles.width_350]}>
              <Text style={[AppStyles.paragraph_4, AppStyles.white]}>MON:</Text>
              <DatePicker
                setLeftValue={setMonday1}
                setRightValue={setMonday2}
                leftValue={monday1}
                rightValue={monday2}
              />
            </View>

            <View style={[AppStyles.margin_top_spacing2, AppStyles.date_row, AppStyles.width_350]}>
              <Text style={[AppStyles.paragraph_4, AppStyles.white]}>TUE:</Text>
              <DatePicker
                setLeftValue={setTuesday1}
                setRightValue={setTuesday2}
                leftValue={tuesday1}
                rightValue={tuesday2}
              />
            </View>

            <View style={[AppStyles.margin_top_spacing2, AppStyles.date_row, AppStyles.width_350]}>
              <Text style={[AppStyles.paragraph_4, AppStyles.white]}>WED:</Text>
              <DatePicker
                setLeftValue={setWednsday1}
                setRightValue={setWednsday2}
                leftValue={wednsday1}
                rightValue={wednsday2}
              />
            </View>

            <View style={[AppStyles.margin_top_spacing2, AppStyles.date_row, AppStyles.width_350]}>
              <Text style={[AppStyles.paragraph_4, AppStyles.white]}>THU:</Text>
              <DatePicker
                setLeftValue={setThursday1}
                setRightValue={setThursday2}
                leftValue={thursday1}
                rightValue={thursday2}
              />
            </View>

            <View style={[AppStyles.margin_top_spacing2, AppStyles.date_row, AppStyles.width_350]}>
              <Text style={[AppStyles.paragraph_4, AppStyles.white]}>FRI:</Text>
              <DatePicker
                setLeftValue={setFriday1}
                setRightValue={setFriday2}
                leftValue={friday1}
                rightValue={friday2}
              />
            </View>

            <View style={[AppStyles.margin_top_spacing2, AppStyles.date_row, AppStyles.width_350]}>
              <Text style={[AppStyles.paragraph_4, AppStyles.white]}>SAT:</Text>
              <DatePicker
                setLeftValue={setSaturday1}
                setRightValue={setSaturday2}
                leftValue={saturday1}
                rightValue={saturday2}
              />
            </View>

            <View style={[AppStyles.margin_top_spacing2, AppStyles.date_row, AppStyles.width_350]}>
              <Text style={[AppStyles.paragraph_4, AppStyles.white]}>SUN:</Text>
              <DatePicker
                setLeftValue={setSunday1}
                setRightValue={setSunday2}
                leftValue={sunday1}
                rightValue={sunday2}
              />
            </View>

            <View style={[AppStyles.margin_top_spacing4]}>
              <Primary_button
                onPressFunction={checkInputs}
                text="Next"
              />
            </View>

            <View style={[AppStyles.margin_top_spacing4]}>
              <Secondary_button
                onPressFunction={() => {
                  navigation.navigate('Office_create_1');
                }}
                text="Back"
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default Office_create_screen_2;
