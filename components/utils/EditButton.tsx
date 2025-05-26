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
import AppStyles from '../../styles/AppStyles.tsx';

const EditButton = () => {
  return (
    <View style={AppStyles.action_button}>
      <Image
        source={require('../../resources/png/edit-button.png')}
        style={[AppStyles.horizontaly_centered]}
      />
    </View>
  );
};

export default EditButton;
