import {useState} from 'react';
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
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppStyles from './styles/AppStyles.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Account_screen from './components/Account_screen.tsx';
import Admin_check_screen from './components/Admin_check_screen.tsx';
import Approved_screen from './components/Approved_screen.tsx';
import Create_exchange_screen from './components/Create_exchange_screen.tsx';
import Exchange_details_screen from './components/Exchange_details_screen.tsx';
import Exchange_office_screen from './components/Exchange_office_screen.tsx';
import Exchange_role_screen from './components/Exchange_role_screen.tsx';
import Login_screen from './components/Login_screen.tsx';
import Map_screen from './components/Map_screen.tsx';
import Office_create_screen_1 from './components/Office_create_screen_1.tsx';
import Office_create_screen_2 from './components/Office_create_screen_2.tsx';
import Office_create_screen_3 from './components/Office_create_screen_3.tsx';
import Onboarding_screen from './components/Onboarding_screen.tsx';
import Splash_screen from './components/Splash_screen.tsx';
import User_role_screen from './components/User_role_screen.tsx';
import Waiting_screen from './components/Waiting_screen.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import UpdateExchangeScreen from './components/UpdateExchangeScreen.tsx';
import RegistrationScreen from './components/RegistrationScreen.tsx';

export type RootStackParamList = {
  Splash: undefined;
  Account: undefined;
  Admin_check: undefined;
  Approved: undefined;

  Update_exchange: 
   {
    exchangeRates:Array<{ imageName: string; currency: string,buyValue:number, sellValue:number}>,
    setExchangeRates 
    :(variable:Array<{ imageName: string; currency: string,buyValue:number, sellValue:number}>)=>void
      
    currency:string,
    buyValue:number,
    sellValue:number,
    flag:string,
    setSelectedRate: (value:{ imageName: string; currency: string,buyValue:number, sellValue:number} )=>void;

};
  Create_exchange: 
 {
  exchangeRates:Array<{ imageName: string; currency: string,buyValue:number, sellValue:number}>,
  setExchangeRates  :(variable:Array<{ imageName: string; currency: string,buyValue:number, sellValue:number}>)=>void
  };

  Exchange_details: undefined;
  Exchange_office: { email: string };
  Exchange_role: undefined;
  Login: { type: string };
  Register: undefined;
  Map: undefined;
  Office_create_1: undefined;
  Office_create_2: {
    name: string;
    location: string;
    email: string;
    description: string;
    phone: string;
    password: string;
    repeatPassword: string;
  };
  Office_create_3:
 {
    name: string;
    location: string;
    email: string;
    description: string;
    phone: string;
    password: string;
    repeatPassword: string;
    monday1:string
    monday2:string
    tuesday1:string
    tuesday2:string
    wednsday1:string
    wednsday2:string
    thursday1:string
    thursday2:string
    friday1:string
    friday2:string
    saturday1:string
    saturday2:string
    sunday1:string
    sunday2:string
  };
  Onboarding: undefined;
  User_role: undefined;
  Waiting: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [userRole, setUserRole] = useState<'user' | 'exchange' | null>(null);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleRoleSelection = (role: 'user' | 'exchange') => {
    setUserRole(role);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen name="Splash" options={{headerShown: false}}>
            {props => <Splash_screen {...props} />}
          </Stack.Screen>

          <Stack.Screen
            name="Account"
            options={{headerShown: false}}
            component={Account_screen}></Stack.Screen>
          <Stack.Screen
            name="Admin_check"
            options={{headerShown: false}}
            component={Admin_check_screen}></Stack.Screen>
          <Stack.Screen
            name="Approved"
            options={{headerShown: false}}
            component={Approved_screen}></Stack.Screen>
          <Stack.Screen
            name="Create_exchange"
            options={{headerShown: false}}
            component={Create_exchange_screen}></Stack.Screen>
          <Stack.Screen
            name="Update_exchange"
            options={{headerShown: false}}
            component={UpdateExchangeScreen}></Stack.Screen>
          <Stack.Screen
            name="Exchange_details"
            options={{headerShown: false}}
            component={Exchange_details_screen}></Stack.Screen>
          <Stack.Screen
            name="Exchange_office"
            options={{headerShown: false}}
            component={Exchange_office_screen}></Stack.Screen>
          <Stack.Screen
            name="Exchange_role"
            options={{headerShown: false}}
            component={Exchange_role_screen}></Stack.Screen>

          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={Login_screen}>
              
            </Stack.Screen>
          <Stack.Screen
            name="Register"
            options={{headerShown: false}}
            component={RegistrationScreen}></Stack.Screen>
          <Stack.Screen
            name="Map"
            options={{headerShown: false}}
            component={Map_screen}></Stack.Screen>
          <Stack.Screen
            name="Office_create_1"
            options={{headerShown: false}}
            component={Office_create_screen_1}></Stack.Screen>
          <Stack.Screen
            name="Office_create_2"
            options={{headerShown: false}}
            component={Office_create_screen_2}></Stack.Screen>
          <Stack.Screen
            name="Office_create_3"
            options={{headerShown: false}}
            component={Office_create_screen_3}></Stack.Screen>
          <Stack.Screen
            name="Onboarding"
            options={{headerShown: false}}
            component={Onboarding_screen}></Stack.Screen>
          <Stack.Screen
            name="User_role"
            options={{headerShown: false}}
            component={User_role_screen}></Stack.Screen>
          <Stack.Screen
            name="Waiting"
            options={{headerShown: false}}
            component={Waiting_screen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
