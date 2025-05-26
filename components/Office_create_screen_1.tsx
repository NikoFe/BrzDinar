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
import AppTextInputWithLabel from './utils/AppTextInputWithLabel.tsx';
import AppTextArea from './utils/AppTextArea.tsx';

const Office_create_screen_1 = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
}) => {
  return (
    <>
      <StatusBar hidden={true} />

      <SafeAreaView style={{flex: 1}}>
        <Header text="Creating exchange offices"></Header>
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
              defaultText="INSA menjalnica"
              label="Name:"></AppTextInputWithLabel>
          </View>
          <View style={AppStyles.margin_top_spacing2}>
            <AppTextInputWithLabel
              defaultText="Celjska ulica"
              label="Location:"></AppTextInputWithLabel>
          </View>

          <View style={AppStyles.margin_top_spacing2}>
            <AppTextInputWithLabel
              defaultText="030-070-998"
              label="Phone number:"></AppTextInputWithLabel>
          </View>
          <View style={AppStyles.margin_top_spacing2}>
            <AppTextArea
              label={'description: '}
              defaultText={
                'Menjalnica za evropske valute, ki se nahaja v mestu Mariboru'
              }
            />
          </View>

          <View style={AppStyles.margin_top_spacing2}>
            <Primary_button
              onPressFunction={() => {
                navigation.navigate('Office_create_2');
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
