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

const Delete_button = () => {
  return (
    <View style={AppStyles.action_button}>
      <Image
        source={require('../../resources/png/delete-button.png')}
        style={[AppStyles.horizontaly_centered]}
      />
    </View>
  );
};

export default Delete_button;
