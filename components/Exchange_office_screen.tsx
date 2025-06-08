import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  Alert,
  TextInput,
  StyleSheet,
} from 'react-native';
import AppStyles from '../styles/AppStyles.tsx';
import { RootStackParamList } from '../App.tsx';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import Header from './utils/Header.tsx';
import ExchangeOfficeData from './utils/ExchangeOfficeData.tsx';
import AppTextInputWithLabel from './utils/AppTextInputWithLabel.tsx';
import Primary_button from './utils/Primary_button.tsx';

type ExchangeOfficeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Exchange_office'
>;

type ExchangeOfficeScreenRouteProp = RouteProp<RootStackParamList, 'Exchange_office'>;

const Exchange_office_screen = ({
  navigation,
  route,
}: {
  navigation: ExchangeOfficeScreenNavigationProp;
  route: ExchangeOfficeScreenRouteProp;
}) => {
  const { email } = route.params;
  const [officeData, setOfficeData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Only these 3 fields editable
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');

  const [exchangeRates, setExchangeRates] =
    useState<Array<{ currency: string; buyValue: number; sellValue: number }>>([]);

  const [newRate, setNewRate] = useState({ currency: '', buyValue: '', sellValue: '' });

  useEffect(() => {
    const fetchOfficeData = async () => {
      try {
        const snapshot = await firestore()
          .collection('exchange_offices')
          .where('email', '==', email)
          .get();

        if (!snapshot.empty) {
          const data = snapshot.docs[0].data();
          setOfficeData(data);
          setLocation(data.location || '');
          setPhone(data.phone || '');
          setExchangeRates(data.exchangeRates || []);
        }
      } catch (error) {
        console.error('Error fetching office data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOfficeData();
  }, [email]);

  const handleUpdateOfficeInfo = async () => {
    try {
      const snapshot = await firestore()
        .collection('exchange_offices')
        .where('email', '==', email)
        .get();

      if (!snapshot.empty) {
        const docId = snapshot.docs[0].id;
        await firestore()
          .collection('exchange_offices')
          .doc(docId)
          .update({
            location,
            phone,
          });
        Alert.alert('Data updated successfully!');
      }
    } catch (error) {
      console.error('Error updating office data:', error);
      Alert.alert('Failed to update data.');
    }
  };

  const saveExchangeRates = async () => {
    try {
      const cleanedRates = exchangeRates.filter(r => r.currency && !isNaN(r.buyValue) && !isNaN(r.sellValue));
      const snapshot = await firestore()
        .collection('exchange_offices')
        .where('email', '==', email)
        .get();

      if (!snapshot.empty) {
        const docId = snapshot.docs[0].id;
        await firestore()
          .collection('exchange_offices')
          .doc(docId)
          .update({
            exchangeRates: cleanedRates,
          });
        Alert.alert('Exchange rates saved!');
      }
    } catch (error) {
      console.error('Error saving rates:', error);
      Alert.alert('Failed to save exchange rates.');
    }
  };

  const updateRate = (index: number, field: 'currency' | 'buyValue' | 'sellValue', value: string) => {
    const updated = [...exchangeRates];
    updated[index] = {
      ...updated[index],
      [field]: field === 'currency' ? value : parseFloat(value) || 0,
    };
    setExchangeRates(updated);
  };

  const addNewRate = () => {
    if (!newRate.currency || isNaN(parseFloat(newRate.buyValue)) || isNaN(parseFloat(newRate.sellValue))) {
      Alert.alert('Please enter valid currency, buy and sell values.');
      return;
    }

    const updated = [
      ...exchangeRates,
      {
        currency: newRate.currency,
        buyValue: parseFloat(newRate.buyValue),
        sellValue: parseFloat(newRate.sellValue),
      },
    ];
    setExchangeRates(updated);
    setNewRate({ currency: '', buyValue: '', sellValue: '' });
  };

  const deleteRate = (index: number) => {
    const updated = exchangeRates.filter((_, i) => i !== index);
    setExchangeRates(updated);
  };

  return (
    <>
      <StatusBar hidden={true} />
      <View style={[AppStyles.grayBackground, { flex: 1 }]}>
        <Header text="Exchange Office" />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
            <View style={{ flex: 1 }}>
              {loading ? (
                <ActivityIndicator size="large" color="#00ff00" />
              ) : (
                <ExchangeOfficeData data={officeData} />
              )}

              <View style={[AppStyles.margin_top_spacing3]}>
                <AppTextInputWithLabel
                  label="Location"
                  value={location}
                  onChangeText={setLocation}
                />
              </View>

              <View style={[AppStyles.margin_top_spacing3]}>
                <AppTextInputWithLabel
                  label="Phone number"
                  value={phone}
                  onChangeText={setPhone}
                />
              </View>

              <View style={[AppStyles.horizontaly_centered, AppStyles.margin_top_spacing3]}>
                <Primary_button onPressFunction={handleUpdateOfficeInfo} text="Update Info" />
              </View>

              {/* Exchange Rates section with improved styling */}
              <View style={[AppStyles.margin_top_spacing5, styles.exchangeRatesContainer]}>
                <Text style={[styles.sectionHeader]}>Exchange Rates</Text>

                <View style={styles.tableHeader}>
                  <Text style={[styles.headerCell, { flex: 2 }]}>Currency</Text>
                  <Text style={[styles.headerCell, { flex: 1 }]}>Buy</Text>
                  <Text style={[styles.headerCell, { flex: 1 }]}>Sell</Text>
                  <Text style={[styles.headerCell, { width: 40 }]}></Text>
                </View>

                {exchangeRates.map((rate, index) => (
                  <View key={index} style={styles.tableRow}>
                    <Picker
                      selectedValue={rate.currency}
                      style={[styles.cell, { flex: 2, paddingHorizontal: 0 }]}
                      onValueChange={(itemValue: string) => updateRate(index, 'currency', itemValue)}
                      mode="dropdown"
                    >
                      <Picker.Item label="EUR" value="EUR" />
                      <Picker.Item label="USD" value="USD" />
                      <Picker.Item label="AUD" value="AUD" />
                    </Picker>

                    <TextInput
                      style={[styles.cell, { flex: 1 }]}
                      keyboardType="numeric"
                      value={rate.buyValue.toString()}
                      onChangeText={text => updateRate(index, 'buyValue', text)}
                      placeholder="Buy"
                      placeholderTextColor="#999"
                    />
                    <TextInput
                      style={[styles.cell, { flex: 1 }]}
                      keyboardType="numeric"
                      value={rate.sellValue.toString()}
                      onChangeText={text => updateRate(index, 'sellValue', text)}
                      placeholder="Sell"
                      placeholderTextColor="#999"
                    />
                    <Text style={styles.deleteText} onPress={() => deleteRate(index)}>
                      ✕
                    </Text>
                  </View>
                ))}

                {/* New rate row */}
                <View style={styles.tableRow}>
                  <Picker
                    selectedValue={newRate.currency}
                    style={[styles.cell, { flex: 2, paddingHorizontal: 0 }]}
                    onValueChange={(itemValue: any) => setNewRate({ ...newRate, currency: itemValue })}
                    mode="dropdown"
                  >
                    <Picker.Item label="Select Currency" value="" />
                    <Picker.Item label="EUR" value="EUR" />
                    <Picker.Item label="USD" value="USD" />
                    <Picker.Item label="AUD" value="AUD" />
                  </Picker>
                  <TextInput
                    style={[styles.cell, { flex: 1 }]}
                    placeholder="Buy"
                    keyboardType="numeric"
                    placeholderTextColor="#999"
                    value={newRate.buyValue}
                    onChangeText={text => setNewRate({ ...newRate, buyValue: text })}
                  />
                  <TextInput
                    style={[styles.cell, { flex: 1 }]}
                    placeholder="Sell"
                    keyboardType="numeric"
                    placeholderTextColor="#999"
                    value={newRate.sellValue}
                    onChangeText={text => setNewRate({ ...newRate, sellValue: text })}
                  />
                  <Text style={styles.addText} onPress={addNewRate}>
                    ＋
                  </Text>
                </View>

                <View style={[AppStyles.horizontaly_centered, AppStyles.margin_top_spacing3]}>
                  <Primary_button onPressFunction={saveExchangeRates} text="Save Rates" />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  exchangeRatesContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 0,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: '#000',
  },
  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  headerCell: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  cell: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 6,
    paddingVertical: 6,
    fontSize: 14,
    color: '#000',
  },
  deleteText: {
    color: 'red',
    fontSize: 22,
    paddingHorizontal: 10,
  },
  addText: {
    color: 'green',
    fontSize: 28,
    paddingHorizontal: 10,
  },
});

export default Exchange_office_screen;
