import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  Alert
} from 'react-native';
import AppStyles from '../styles/AppStyles.tsx';
import { RootStackParamList } from '../App.tsx';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import HeaderWithProfile from './utils/HeaderWithProfile.tsx';
import ExchangeOfficeData from './utils/ExchangeOfficeData.tsx';
import AppTextInputWithLabel from './utils/AppTextInputWithLabel.tsx';
import Primary_button from './utils/Primary_button.tsx';
import RateContainer from './utils/RateContainer.tsx';

type ExchangeOfficeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Exchange_office'
>;

type ExchangeOfficeScreenRouteProp = RouteProp<RootStackParamList, 'Exchange_office'>;

const Exchange_office_screen = ({
  navigation,
  route,
}: {
  navigation: ExchangeOfficeScreenNavigationProp;
  route: ExchangeOfficeScreenRouteProp;
}) => {
  const { email } = route.params;
  const [officeData, setOfficeData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [exchangeRates, setExchangeRates] =
   useState<Array<{ imageName: string; currency: string,buyValue:number, sellValue:number}>>([]);

//////placeholders:
  const navigateToCreate=()=>{
    navigation.navigate("Create_exchange",
   {
    exchangeRates,
    setExchangeRates
   }
    )
  }
  const navigateToEdit  =()=>{
    Alert.alert("AAA")
    navigation.navigate("Update_exchange")
  }




  useEffect(() => {
    const fetchOfficeData = async () => {
      try {
        const snapshot = await firestore()
          .collection('exchange_offices')
          .where('email', '==', email)
          .get();

        if (!snapshot.empty) {
          const data = snapshot.docs[0].data();
          setOfficeData(data);
          setLocation(data.location);
          setPhone(data.phone);
        }
      } catch (error) {
        console.error('Error fetching office data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOfficeData();
  }, [email]);

  const handleUpdate = async () => {
    try {
      const snapshot = await firestore()
        .collection('exchange_offices')
        .where('email', '==', email)
        .get();

      if (!snapshot.empty) {
        const docId = snapshot.docs[0].id;
        await firestore()
          .collection('exchange_offices')
          .doc(docId)
          .update({
            location,
            phone,
          });
        Alert.alert('Data updated successfully!');
      }
    } catch (error) {
      console.error('Error updating office data:', error);
      Alert.alert('Failed to update data.');
    }
  };


  return (
    <>
      <ScrollView>
        <StatusBar hidden={true} />
        <SafeAreaView style={{ flex: 1 }}>
          <HeaderWithProfile text="Exchange office" />
          <View style={[AppStyles.grayBackground, { flex: 1 }]}>
            {loading ? (
              <ActivityIndicator size="large" color="#00ff00" />
            ) : (
              <ExchangeOfficeData data={officeData} />
            )}


            <View style={[AppStyles.horizontaly_centered, AppStyles.margin_top_spacing3]}>
              <AppTextInputWithLabel
                label="Location"
                value={location}
                onChangeText={setLocation}
              />
            </View>

            <View style={[AppStyles.horizontaly_centered, AppStyles.margin_top_spacing3]}>
              <AppTextInputWithLabel
                label="Phone number:"
                value={phone}
                onChangeText={setPhone}
              />
            </View>

            <View style={[AppStyles.horizontaly_centered, AppStyles.margin_top_spacing3]}>
              <Primary_button onPressFunction={handleUpdate} text="Change" />
            </View>


            <View style={[AppStyles.horizontaly_centered, AppStyles.margin_top_spacing3]}>
              <RateContainer
              exchangeRates={exchangeRates}
              setExchangeRates={setExchangeRates}
              navigateToEdit={navigateToEdit}
              navigateToCreate={navigateToCreate}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default Exchange_office_screen;
