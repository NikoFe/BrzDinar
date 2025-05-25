import React from 'react';
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

const Office_create_screen_3 = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {
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
            <RateContainer></RateContainer>
          </View>



          <View style={AppStyles.margin_top_spacing4}>
          <Primary_button
            onPressFunction={() => {
              navigation.navigate('Waiting');
            }}
            text="Next"></Primary_button>
         </View>

        <View style={AppStyles.margin_top_spacing2}>
          <Secondary_button
            onPressFunction={() => {
              navigation.navigate('Office_create_2');
            }}
            text="Back"></Secondary_button>
        </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Office_create_screen_3;
