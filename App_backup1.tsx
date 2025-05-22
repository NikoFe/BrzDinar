import  {useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme,StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppStyles from './styles/AppStyles.tsx';


import {Alert, Text, View, Button, TextInput} from 'react-native';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [userRole, setUserRole] = useState<'user' | 'exchange' | null>(null);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleRoleSelection = (role: 'user' | 'exchange') => {
    setUserRole(role);
    // Handle navigation or further setup based on role
  };

  /*
  return (
    <SafeAreaView style={backgroundStyle}>
      
      <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
    </SafeAreaView>
  );*/
    return (
    <SafeAreaView style={{flex: 1}} >
        <View style={[AppStyles.grayBackground, AppStyles.verticalCenter ,{ flex: 1 }]}>
        <View style={AppStyles.inputRow}>
          <Text style={AppStyles.bold}>Username: </Text>
          <TextInput
            style={AppStyles.input}
            onChangeText={()=>{console.log("AAAA")}} // No need for `(text) => setUsername(text)`
            value={"aaa"}
          />
        </View>
        <View style={AppStyles.inputRow}>
          <Text style={AppStyles.bold}>Password: </Text>
          <TextInput
            style={AppStyles.input}
            onChangeText={()=>{console.log("AAAA")}} // No need for `(text) => setPassword(text)`
            value={"bbb"}
          />
        </View>

        <Button title="Sign in" onPress={()=>{console.log("AAAA")}} />
      </View>
      </SafeAreaView>
    );


};

export default App;
