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
import PlusButton from './PlusButton.tsx';
import EditButton from './EditButton.tsx';
import DeleteButton from './DeleteButton.tsx';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App.tsx';

const imageMap: { [key: string]: any } = {
  'australian-flag.png': require('../../resources/png/australian-flag.png'),
  'us-flag.png': require('../../resources/png/us-flag.png'),
  'eu-flag.png': require('../../resources/png/eu-flag.png'),
  'russian-flag.png': require('../../resources/png/russian-flag.png'),
  // Add more mappings here
};

const ExchangeRate = (
{
  imageName,
  currency,
  buyValue,
  sellValue,
  setExchangeRates,
  exchangeRates,
  setSelectedRate,
  isViewOnly = false
}: {
  imageName: string;
  currency: string;
  buyValue: number;
  sellValue: number;
  setExchangeRates: (value: Array<{ imageName: string; currency: string,buyValue:number, sellValue:number  }>) => void;
  exchangeRates: Array<{ imageName: string; currency: string,buyValue:number, sellValue:number  }>;
  setSelectedRate: (variable:{ imageName: string; currency: string,buyValue:number, sellValue:number})=>void;
  isViewOnly?: boolean;
}
) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const deleteRate = async () => {
    if (isViewOnly) {
      Alert.alert('Info', 'This is a view-only screen');
      return;
    }
    
    let tempArray = exchangeRates.slice();
    for(let i=0; i<exchangeRates.length; i++){
      if(exchangeRates[i].imageName == imageName && exchangeRates[i].currency==currency && 
      exchangeRates[i].buyValue==buyValue && exchangeRates[i].sellValue==sellValue 
       )
     {
      console.log("DELETED at INDEX: ", i)
      tempArray.splice(i,1)
      setExchangeRates(tempArray)
     }
    }
  }

  const startEdit = () => {
    if (isViewOnly) {
      Alert.alert('Info', 'This is a view-only screen');
      return;
    }

    const newRate = {
      imageName,
      currency,
      buyValue,
      sellValue,
    }
    setSelectedRate(newRate)
    navigation.navigate('Update_exchange', {
      exchangeRates,
      setExchangeRates,
      currency,
      buyValue,
      sellValue,
      flag: imageName,
    });
  }

  return (
    <View style={[AppStyles.horizontaly_centered]}>
      {!isViewOnly && (
        <View style={[AppStyles.exchange_buttons]}>
          <DeleteButton 
            onPressFunction={deleteRate}
          />
          <EditButton
            onPressFunction={startEdit}
          />
        </View>
      )}
      {isViewOnly && (
        <View style={{height: 90}} />
      )}
      <Image
        source={imageMap[imageName]}
        style={[AppStyles.horizontaly_centered, AppStyles.flag_image]}
      />
      <Text style={[AppStyles.paragraph_3, AppStyles.margin_top_spacing3]}>
        {currency}
      </Text>
      <View style={[AppStyles.exchange_text]}>
        <Text style={[AppStyles.paragraph_3, AppStyles.margin_top_spacing3]}>
          Buy:{' '}
        </Text>
        <Text style={[AppStyles.paragraph_3, AppStyles.margin_top_spacing3]}>
          Sell:
        </Text>
      </View>
      <View style={[AppStyles.exchange_text2]}>
        <Text style={[AppStyles.paragraph_3]}>{buyValue} </Text>
        <Text style={[AppStyles.paragraph_3]}>{sellValue} </Text>
      </View>

      <View
        style={[
          AppStyles.exchange_border,
          AppStyles.horizontaly_centered,
          AppStyles.margin_top_spacing3,
        ]}
      />
    </View>
  );
};

export default ExchangeRate;
