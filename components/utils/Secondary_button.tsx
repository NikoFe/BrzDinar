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
 Pressable
} from 'react-native';
 import AppStyles from '../../styles/AppStyles.tsx';
const Secondary_button = ({
  onPressFunction,
  text

}: {
 // onPressFunction : React.MouseEventHandler;
   onPressFunction: () => void;
   text: string
}
) => {
  return (
  <Pressable
      onPress={(onPressFunction)}
      style={({ pressed }) => [
        AppStyles.secondary_button,
        pressed && AppStyles.secondary_button,
      ]}
    >
    <View style={AppStyles.secondary_button} 
     >
    <Text
    style={AppStyles.paragraph_3} 
    >{text}</Text>
    
    </View>
    </Pressable>
  )

}

export default Secondary_button