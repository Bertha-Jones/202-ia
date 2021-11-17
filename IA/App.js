import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SignUp from './screens/SignUp';
import CartScreen from './screens/cartscreen';
import DetailScreen from './screens/DetailScreen';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen'
import products from './consts/products';

const Main = createNativeStackNavigator();

export default function App () {
  return (

    <NavigationContainer>
      <Main.Navigator >
        <Main.Screen
          name="Home"
          component={HomeScreen}
        />
        <Main.Screen 
         name="Main"
         component={MainScreen}
        />
        <Main.Screen 
          name="SignUp"
          component={SignUp}
        />
        <Main.Screen
          name="Cart"
          component={CartScreen}
        />
        <Main.Screen
        name = "Login"
        component={LoginScreen}
        />
        <Main.Screen
          name='Details'
          component={DetailScreen}
          screenOptions={{
        headerShown: true
      }}/>
      </Main.Navigator>
    </NavigationContainer>
  );
};