import React from 'react'
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
  Pressable,
  Image
} from 'react-native';
 import AppStyles from '../../styles/AppStyles.tsx';


const AppDropdown = (
    {
    input,
  }: {
    input: string;
  }

) => {

  return (

  <View style={AppStyles.horizontaly_centered}>
   <View
   style={AppStyles.dropDownButton  }
   >
       <Image source={require('../../resources/png/dropdown-arrow.png')} 
          style={[ AppStyles.dropdown_arrow ]}
          />
    
    <Text  style= {AppStyles.paragraph_4}> 
        {input}
    </Text>
  </View>

 </View>
  )
}

export default AppDropdown