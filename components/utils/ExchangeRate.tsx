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
  Image
} from 'react-native';
 import AppStyles from '../../styles/AppStyles.tsx';
import PlusButton from './PlusButton.tsx';
import EditButton from './EditButton.tsx';
import DeleteButton from './DeleteButton.tsx';



const ExchangeRate = () => {
  return (
   <View style={[AppStyles.horizontaly_centered]}>
    <View style={[AppStyles.exchange_buttons]}>
     <DeleteButton/>
     <EditButton/>
   </View>
         <Image
      source={require('../../resources/png/australian-flag.png')}
      style={[
        AppStyles.horizontaly_centered,
        AppStyles.flag_image
      ]}
    />
    <Text style={[AppStyles.paragraph_3,AppStyles.margin_top_spacing3   ]}  >AUD</Text>
   <View style={[AppStyles.exchange_text]}>
    <Text style={[AppStyles.paragraph_3,AppStyles.margin_top_spacing3   ]}  >Buy: </Text>
    <Text style={[AppStyles.paragraph_3,AppStyles.margin_top_spacing3   ]}  >Sell:</Text>
   </View>
   <View style={[AppStyles.exchange_text2]}>
    <Text style={[AppStyles.paragraph_3 ]}  >59.87 </Text>
    <Text style={[AppStyles.paragraph_3   ]}  >63.47</Text>
   </View>
   
    <View style={[AppStyles.exchange_border,AppStyles.horizontaly_centered,AppStyles.margin_top_spacing3  ]}/>


  </View>

  )
}

export default ExchangeRate