import React, { useState } from 'react';
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
  Image,
  
} from 'react-native';
import AppStyles from '../../styles/AppStyles.tsx';

const AppDropdown = (
  {title,
  values,
  onPressFunction,
  dropdownSetter

}: {
  title: string,
  values: string[]
  onPressFunction: () => void;
  dropdownSetter: (value:string) => void;
}) => {

  const [visible, setVisible] = useState(false);

  return (
    <View style={AppStyles.horizontaly_centered}>

      <Pressable
      onPress= {()=>{setVisible(!visible)}}
      
      >
      <View style={AppStyles.dropDownButton}>

     {!visible && 
        <View style={AppStyles.dropdown_arrow_up_div}>
         <Image
          source={require('../../resources/png/dropdown-arrow.png')}
     
        />
       </View>
     }

        <Image
          source={require('../../resources/png/dropdown-arrow.png')}
          style={[AppStyles.dropdown_arrow]}
        />


        <Text style={AppStyles.paragraph_4}>{title}</Text>
      </View>
   </Pressable>

     {visible && values &&
      <View style={AppStyles.hiddenDropdown}> 
       {values.map((value, index) => 
       <Pressable
       onPress={()=>{
        Alert.alert(value)
        dropdownSetter(value)
      }}
       >
       <Text  style={AppStyles.dropdownCell} >{value}</Text> 
       </Pressable>
        )}
      </View>
     }

    </View>
  );
};

export default AppDropdown;
