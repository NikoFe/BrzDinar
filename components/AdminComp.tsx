import React from 'react';
import {useState,useEffect} from "react";
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
  ScrollView,
} from 'react-native';
import AppStyles from '../styles/AppStyles.tsx';
import Header from './utils/Header.tsx';
import {RootStackParamList} from '../App.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AdminCell from './utils/AdminCell.tsx';
import HeaderWithProfile from './utils/HeaderWithProfile.tsx';

const Admin_cheek_screen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {

  const [pendingOffices, setPendingOffices] =
   useState<Array<{ 
    name: string; 
    created: string,
    password:number
    exchangeRates:Array<{ imageName: string; currency: string,buyValue:number, sellValue:number}> 
    location:string
    email:string
    description:string 
    phone:string
    monday1:string
    monday2:string
    tuesday1:string
    tuesday2:string
    wednsday1:string
    wednsday2:string
    thursday1:string
    thursday2:string
    friday1:string
    friday2:string
    saturday1:string
    saturday2:string
    sunday1:string
    sunday2:string
   }>>([]);

  return (
    <>
      <ScrollView>
        <StatusBar hidden={true} />
        <SafeAreaView style={{flex: 1}}>
          <HeaderWithProfile text="Admin_check"></HeaderWithProfile>
          <View style={[AppStyles.grayBackground, {flex: 1}]}>
            <Text
              style={[
                AppStyles.paragraph_1,
                AppStyles.horizontaly_centered,
                AppStyles.margin_top_spacing2,
                AppStyles.white,
              ]}>
              Requests:
            </Text>
            <View>
            {
              pendingOffices.map((pending) => 
              <AdminCell 
               name={pending.name}
               created={"9/20/5"}
               password={"placeholder_password"}
              />
              )}
            </View>
            

            {
              /*
            <View style={[AppStyles.margin_top_spacing4, {flex: 1}]}>
              <AdminCell 
               name={"INSA menjalnica"}
               created={"9/20/5"}
               password={"placeholder_password"}
              />
            </View>
            <View style={[AppStyles.margin_top_spacing4, {flex: 1}]}>
              <AdminCell 
               name={"INSA menjalnica"}
               created={"9/20/5"}
               password={"placeholder_password"}
              />
            </View>*/
            }
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default Admin_cheek_screen;
