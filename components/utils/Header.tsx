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
  Pressable
} from 'react-native';
 import AppStyles from '../../styles/AppStyles.tsx';
 import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App.tsx';
import {useNavigation} from '@react-navigation/native';

type Navigation = NativeStackNavigationProp<RootStackParamList>;


const Header = (
{
  text
  
}: {
   text: string
}
) => {

  const navigation = useNavigation<Navigation>();

  const onPressFunction = () => {
    navigation.goBack();
  };

  return (
   <SafeAreaView>
    <View  style={AppStyles.customHeader}>

  <Pressable
      onPress={(onPressFunction)}
    >
    <Image source={require('../../resources/png/arrow-left.png')}   
        style={AppStyles.backArrow}
    ></Image>
      <Text style={AppStyles.whiteText}  >{text}</Text>
</Pressable>
 
    </View>
   </SafeAreaView>

  )
}

export default Header