import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground,Image, StyleSheet, Text, TextInput, View } from 'react-native';
//import COLORS from './consts/colors';



export default function HomeScreen({navigation}) {
  
  return (
    <ImageBackground source={require('../assets/images/stock-photo-top-view-shopping-cart-presents.jpg')} 
    style={styles.container}>
      <Text style = {styles.Welcome}>WELCOME TO BETTY'S STORE </Text>

      <View>
        <TextInput style = {styles.Input} placeholder='Enter your username/email'/>
        <TextInput style = {styles.Input} placeholder='Enter your password' secureTextEntry={true}/>
      </View>

      <View style={{marginTop: 20}}>
        <Button title='LOGIN' onPress={() => navigation.navigate('Main')}/>
      </View>
      
      <Text style={{marginTop: 30, }}> Don't have an account? </Text>
      <Button  st title='SIGN UP' onPress={() => navigation.navigate('SignUp')} />
      
    </ImageBackground>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -100,
    backgroundColor: '#f7feff',
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
        
  },
  Welcome : {
    color:'#ad5a00',
    fontWeight: 'bold',
    flexDirection: 'row',
    fontSize: 25, 
    paddingTop:50,
},
Input:{
    borderWidth:1,
    borderColor: '#000000',
    borderRadius: 8,
    padding: 8,
    width: 200,
    marginTop: 20
}
});