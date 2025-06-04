import {useEffect} from 'react';
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
  Pressable,
  Image,
} from 'react-native';
import AppStyles from '../../styles/AppStyles.tsx';


const NumberInput = ({
  label,
  value,
  setValue,
  
}: {
  label: string;
  value: number;
  setValue: (value: number) => void;
}) => {
  const [number, onChangeNumber] = React.useState(  value,
);

  useEffect(() => {
    onChangeNumber(  value,
);
  }, []);

  return (



    <View style={AppStyles.horizontaly_centered}>

   <Pressable
    style={AppStyles.up_pressable}
    onPress={()=>{
      setValue(value+1)}}
      />

   
   <Pressable
    style={AppStyles.down_pressable}
    onPress={()=>{
      setValue(value-1)}}
      />




      <Text
        style={[
          AppStyles.paragraph_4_label,
          AppStyles.white,
          AppStyles.margin_bottom_spacing1,
        ]}>
        {label}
      </Text>


    
      <Image
        source={require('../../resources/png/gray-arrow-down.png')}
        style={[
          AppStyles.horizontaly_centered,
          AppStyles.number_input_arrow_down,
        ]}
      />
      <Image
         source={require('../../resources/png/gray-arrow-down.png')}
         style={[
           AppStyles.horizontaly_centered,
           AppStyles.number_input_arrow_up,
         ]}
       />
    

       <View
         style={AppStyles.number_textInput}
       
       >

        <Text style={AppStyles.paragraph_4}>
          {value}
        </Text>

     </View>


       {/*
       <TextInput
         style={AppStyles.textInput}
         value={number.toString()}
       />
       */
       }
     </View>
   );
 };

export default NumberInput;
