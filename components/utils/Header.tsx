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
  Pressable,
} from 'react-native';
import AppStyles from '../../styles/AppStyles.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App.tsx';
import {useNavigation} from '@react-navigation/native';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const Header = ({text, onBackPress}: {text: string; onBackPress?: () => void}) => {
  const navigation = useNavigation<Navigation>();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView>
      <View style={AppStyles.customHeader}>
        <Pressable onPress={handleBackPress}>
          <Image source={require('../../resources/png/arrow-left.png')}></Image>
        </Pressable>
        <Text style={[AppStyles.whiteText]}>{text}</Text>
        <Pressable onPress={() => {}}>
          <Image
            source={require('../../resources/png/profile-icon.png')}
            style={AppStyles.invisible_image}></Image>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Header;
