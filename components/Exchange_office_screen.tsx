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
  Platform,
} from 'react-native';
import AppStyles from '../styles/AppStyles.tsx';
import { RootStackParamList } from '../App.tsx';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import Header from './utils/HeaderWithProfile.tsx';
import ExchangeOfficeData from './utils/ExchangeOfficeData.tsx';
import AppTextInputWithLabel from './utils/AppTextInputWithLabel.tsx';
import Primary_button from './utils/Primary_button.tsx';
import Secondary_button from './utils/Secondary_button.tsx';

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

  // Editable fields
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');

  const [exchangeRates, setExchangeRates] =
    useState<Array<{ currency: string; buyValue: number; sellValue: number }>>([]);

  const [newRate, setNewRate] = useState({ currency: '', buyValue: '', sellValue: '' });

  // Working hours states
  const [monday1, setMonday1] = useState('');
  const [monday2, setMonday2] = useState('');
  const [tuesday1, setTuesday1] = useState('');
  const [tuesday2, setTuesday2] = useState('');
  const [wednsday1, setWednsday1] = useState('');
  const [wednsday2, setWednsday2] = useState('');
  const [thursday1, setThursday1] = useState('');
  const [thursday2, setThursday2] = useState('');
  const [friday1, setFriday1] = useState('');
  const [friday2, setFriday2] = useState('');
  const [saturday1, setSaturday1] = useState('');
  const [saturday2, setSaturday2] = useState('');
  const [sunday1, setSunday1] = useState('');
  const [sunday2, setSunday2] = useState('');

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

          // Working hours
          setMonday1(data.monday1 || '');
          setMonday2(data.monday2 || '');
          setTuesday1(data.tuesday1 || '');
          setTuesday2(data.tuesday2 || '');
          setWednsday1(data.wednsday1 || '');
          setWednsday2(data.wednsday2 || '');
          setThursday1(data.thursday1 || '');
          setThursday2(data.thursday2 || '');
          setFriday1(data.friday1 || '');
          setFriday2(data.friday2 || '');
          setSaturday1(data.saturday1 || '');
          setSaturday2(data.saturday2 || '');
          setSunday1(data.sunday1 || '');
          setSunday2(data.sunday2 || '');
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
            monday1,
            monday2,
            tuesday1,
            tuesday2,
            wednsday1,
            wednsday2,
            thursday1,
            thursday2,
            friday1,
            friday2,
            saturday1,
            saturday2,
            sunday1,
            sunday2,
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
      <StatusBar 
        hidden={false}
        barStyle="light-content"
        translucent={true}
      />
      <View style={[AppStyles.grayBackground, { flex: 1 }]}>
        <Header text="Exchange Office" />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <SafeAreaView style={{ 
            flex: 1, 
            paddingHorizontal: 20,
            backgroundColor: AppStyles.headerBackground.backgroundColor,
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          }}>
            <Text style={[AppStyles.header_3_bold_Inter_white]}>Office Info</Text>
            <View style={{ flex: 1 }}>
              {loading ? (
                <ActivityIndicator size="large" color="#00ff00" />
              ) : (
                <ExchangeOfficeData data={officeData} />
              )}

              <Text style={[AppStyles.header_3_bold_Inter_white, AppStyles.margin_top_spacing5]}>Update Info</Text>
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

              {/* Working Hours Inputs */}
              <View style={[AppStyles.margin_top_spacing5, styles.exchangeRatesContainer]}>
                <Text style={[styles.sectionHeader]}>Working Hours</Text>

                {/* Table Header */}
                <View style={styles.tableHeader}>
                  <Text style={[styles.headerCell, { flex: 2 }]}>Day</Text>
                  <Text style={[styles.headerCell, { flex: 1 }]}>Open</Text>
                  <Text style={[styles.headerCell, { flex: 1 }]}>Close</Text>
                </View>

                {[
                  { day: 'Monday', start: monday1, end: monday2, setStart: setMonday1, setEnd: setMonday2 },
                  { day: 'Tuesday', start: tuesday1, end: tuesday2, setStart: setTuesday1, setEnd: setTuesday2 },
                  { day: 'Wednesday', start: wednsday1, end: wednsday2, setStart: setWednsday1, setEnd: setWednsday2 },
                  { day: 'Thursday', start: thursday1, end: thursday2, setStart: setThursday1, setEnd: setThursday2 },
                  { day: 'Friday', start: friday1, end: friday2, setStart: setFriday1, setEnd: setFriday2 },
                  { day: 'Saturday', start: saturday1, end: saturday2, setStart: setSaturday1, setEnd: setSaturday2 },
                  { day: 'Sunday', start: sunday1, end: sunday2, setStart: setSunday1, setEnd: setSunday2 },
                ].map(({ day, start, end, setStart, setEnd }) => (
                  <View key={day} style={styles.tableRow}>
                    <Text style={[styles.cell, { flex: 2, textAlign: 'left', paddingLeft: 10 }]}>{day}</Text>
                    <TextInput
                      style={[styles.cell, { flex: 1 }]}
                      placeholder="Open"
                      value={start}
                      onChangeText={setStart}
                      keyboardType="numeric"
                    />
                    <TextInput
                      style={[styles.cell, { flex: 1 }]}
                      placeholder="Close"
                      value={end}
                      onChangeText={setEnd}
                      keyboardType="numeric"
                    />
                  </View>
                ))}
              </View>


              <View style={[AppStyles.horizontaly_centered, AppStyles.margin_top_spacing3]}>
                <Primary_button onPressFunction={handleUpdateOfficeInfo} text="Update Info" />
              </View>

              <Text style={[AppStyles.header_3_bold_Inter_white, AppStyles.margin_top_spacing5]}>Update Rates</Text>
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

                    <Text
                      style={[styles.deleteButton]}
                      onPress={() => deleteRate(index)}
                    >
                      X
                    </Text>
                  </View>
                ))}

                {/* Add new rate */}
                <View style={styles.tableRow}>
                  <Picker
                    selectedValue={newRate.currency}
                    style={[styles.cell, { flex: 2, paddingHorizontal: 0 }]}
                    onValueChange={itemValue => setNewRate(prev => ({ ...prev, currency: itemValue }))}
                    mode="dropdown"
                  >
                    <Picker.Item label="Currency" value="" />
                    <Picker.Item label="EUR" value="EUR" />
                    <Picker.Item label="USD" value="USD" />
                    <Picker.Item label="AUD" value="AUD" />
                  </Picker>

                  <TextInput
                    style={[styles.cell, { flex: 1 }]}
                    keyboardType="numeric"
                    value={newRate.buyValue}
                    onChangeText={text => setNewRate(prev => ({ ...prev, buyValue: text }))}
                    placeholder="Buy"
                    placeholderTextColor="#999"
                  />
                  <TextInput
                    style={[styles.cell, { flex: 1 }]}
                    keyboardType="numeric"
                    value={newRate.sellValue}
                    onChangeText={text => setNewRate(prev => ({ ...prev, sellValue: text }))}
                    placeholder="Sell"
                    placeholderTextColor="#999"
                  />

                  <Text style={[styles.addButton]} onPress={addNewRate}>
                    +
                  </Text>
                </View>
              </View>
              <View style={[AppStyles.horizontaly_centered, AppStyles.margin_top_spacing3]}>
                <Secondary_button onPressFunction={saveExchangeRates} text="Save Rates" />
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cell: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    height: 50,
    fontSize: 16,
    paddingHorizontal: 8,
    textAlign: 'center',
  },
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  headerCell: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'center',
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 8,
  },
  addButton: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 8,
  },
  exchangeRatesContainer: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  sectionHeader: {
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 12,
    textAlign: 'center',
  },
});

export default Exchange_office_screen;
