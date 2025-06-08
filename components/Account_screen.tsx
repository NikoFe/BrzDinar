import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Platform,
} from 'react-native';
import AppStyles from '../styles/AppStyles.tsx';
import { RootStackParamList } from '../App.tsx';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import HeaderWithProfile from './utils/HeaderWithProfile.tsx';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Account_screen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {
  const [name, setName] = useState('');
  const [firestoreCreatedAt, setFirestoreCreatedAt] = useState('');
  const [authCreatedAt, setAuthCreatedAt] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const user = auth().currentUser;
        const email = user?.email;
        if (!email) return;

        // Get Firebase Auth creation date
        if (user.metadata?.creationTime) {
          const authDate = new Date(user.metadata.creationTime);
          setAuthCreatedAt(authDate.toLocaleDateString());
        }

        // Get Firestore data
        const snapshot = await firestore()
          .collection('exchange_offices')
          .where('email', '==', email)
          .limit(1)
          .get();

        if (!snapshot.empty) {
          const data = snapshot.docs[0].data();
          setName(data.name || '');

          if (data.createdAt?.toDate) {
            const date = data.createdAt.toDate();
            setFirestoreCreatedAt(date.toLocaleDateString());
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserInfo();
  }, []);

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
          backgroundColor: AppStyles.grayBackground.backgroundColor,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}
      >
        <HeaderWithProfile text="Account" />
        <View style={[AppStyles.grayBackground, { flex: 1 }]}>
          <View style={[AppStyles.margin_top_spacing2]}>
            <Text style={[AppStyles.white, AppStyles.paragraph_3_non_center, AppStyles.margin_left_35]}>
              Name:
            </Text>
          </View>
          <View style={[AppStyles.margin_top_spacing2]}>
            <Text style={[AppStyles.gray5, AppStyles.paragraph_3_non_center, AppStyles.margin_left_35]}>
              {name}
            </Text>
          </View>

          <View style={[AppStyles.margin_top_spacing2]}>
            <Text style={[AppStyles.white, AppStyles.paragraph_3_non_center, AppStyles.margin_left_35]}>
              Created at:
            </Text>
          </View>
          <View style={[AppStyles.margin_top_spacing2]}>
            <Text style={[AppStyles.gray5, AppStyles.paragraph_3_non_center, AppStyles.margin_left_35]}>
              {authCreatedAt}
            </Text>
          </View>

          <View style={[AppStyles.margin_top_spacing2]}>
            <Text style={[AppStyles.white, AppStyles.paragraph_3_non_center, AppStyles.margin_left_35]}>
              Login Date:
            </Text>
          </View>
          <View style={[AppStyles.margin_top_spacing2]}>
            <Text style={[AppStyles.gray5, AppStyles.paragraph_3_non_center, AppStyles.margin_left_35]}>
              {firestoreCreatedAt}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Account_screen;
