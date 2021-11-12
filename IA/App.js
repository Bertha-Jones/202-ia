import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SignUp from './screens/SignUp';
import ProductScreen  from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import DetailScreen from './screens/DetailScreen';
import MainScreen from './screens/MainScreen';

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
          name='Details'
          component={DetailScreen}
          screenOptions={{
        headerShown: true
      }}/>
      </Main.Navigator>
    </NavigationContainer>
  );
};