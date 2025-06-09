import React from 'react';
import {useState, useEffect} from "react";
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
  Platform,
} from 'react-native';
import AppStyles from '../styles/AppStyles.tsx';
import Header from './utils/Header.tsx';
import {RootStackParamList} from '../App.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AdminCell from './utils/AdminCell.tsx';
import HeaderWithProfile from './utils/HeaderWithProfile.tsx';
import firestore from '@react-native-firebase/firestore';

interface PendingOffice {
  id: string;
  name: string;
  created: string;
  email: string;
  location: string;
  description: string;
  phone: string;
  approved: boolean;
  exchangeRates: Array<{ imageName: string; currency: string; buyValue: number; sellValue: number }>;
  monday1: string;
  monday2: string;
  tuesday1: string;
  tuesday2: string;
  wednsday1: string;
  wednsday2: string;
  thursday1: string;
  thursday2: string;
  friday1: string;
  friday2: string;
  saturday1: string;
  saturday2: string;
  sunday1: string;
  sunday2: string;
}

type AdminCheckScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Admin_check'>;

const Admin_cheek_screen = ({
  navigation,
}: {
  navigation: AdminCheckScreenNavigationProp;
}) => {
  const [pendingOffices, setPendingOffices] = useState<PendingOffice[]>([]);

  useEffect(() => {
    const fetchPendingOffices = async () => {
      try {
        console.log('Fetching pending offices...');
        const snapshot = await firestore()
          .collection('exchange_offices')
          .where('approved', '==', false)
          .get();

        console.log('Raw Firestore data:', snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })));

        const offices = snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name || '',
            created: data.createdAt?.toDate().toLocaleDateString() || 'N/A',
            email: data.email || '',
            location: data.location || '',
            description: data.description || '',
            phone: data.phone || '',
            approved: data.approved || false,
            exchangeRates: data.exchangeRates || [],
            monday1: data.monday1 || '',
            monday2: data.monday2 || '',
            tuesday1: data.tuesday1 || '',
            tuesday2: data.tuesday2 || '',
            wednsday1: data.wednsday1 || '',
            wednsday2: data.wednsday2 || '',
            thursday1: data.thursday1 || '',
            thursday2: data.thursday2 || '',
            friday1: data.friday1 || '',
            friday2: data.friday2 || '',
            saturday1: data.saturday1 || '',
            saturday2: data.saturday2 || '',
            sunday1: data.sunday1 || '',
            sunday2: data.sunday2 || ''
          };
        });
        console.log('Processed offices:', offices);
        setPendingOffices(offices);
      } catch (error) {
        console.error('Error fetching pending offices:', error);
        Alert.alert('Error', 'Failed to fetch pending offices');
      }
    };

    fetchPendingOffices();
  }, []);

  const handleApprove = async (officeId: string) => {
    try {
      await firestore()
        .collection('exchange_offices')
        .doc(officeId)
        .update({
          approved: true
        });

      // Update local state
      setPendingOffices(prev => prev.filter(office => office.id !== officeId));
      Alert.alert('Success', 'Office approved successfully');
    } catch (error) {
      console.error('Error approving office:', error);
      Alert.alert('Error', 'Failed to approve office');
    }
  };

  const handleDetails = (office: PendingOffice) => {
    navigation.navigate('Exchange_details', { officeData: office });
  };

  return (
    <>
      <StatusBar hidden={false}/>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 1,
        }}
      >
        <HeaderWithProfile text="Admin_check"></HeaderWithProfile>
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
          <View style={[AppStyles.grayBackground, {flex: 1, minHeight: '100%'}]}>
            <Text
              style={[
                AppStyles.paragraph_1,
                AppStyles.horizontaly_centered,
                AppStyles.margin_top_spacing2,
                AppStyles.white,
              ]}>
              Requests:
            </Text>

            <View style={{flex: 1}}>
              {pendingOffices.length === 0 ? (
                <Text
                  style={[
                    AppStyles.paragraph_1,
                    AppStyles.horizontaly_centered,
                    AppStyles.margin_top_spacing4,
                    AppStyles.white,
                  ]}>
                  No pending requests
                </Text>
              ) : (
                pendingOffices.map((office) => (
                  <View key={office.id} style={[AppStyles.margin_top_spacing4]}>
                    <AdminCell 
                      name={office.name}
                      created={office.created}
                      onApprove={() => handleApprove(office.id)}
                      onDetails={() => handleDetails(office)}
                    />
                  </View>
                ))
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Admin_cheek_screen;
