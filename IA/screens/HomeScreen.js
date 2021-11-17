import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground,Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
//import COLORS from './consts/colors';



export default function HomeScreen({navigation}) {
  
  return (
    <ImageBackground source={require('../assets/pic.jpg')} 
    style={styles.container}>
    <View style={styles.viewContainer} >
      <Image source = {require ('../assets/images/betty.png')} style={{height: 150, width: 150,borderRadius:30, marginBottom:35}}/>

       <TouchableWithoutFeedback style={styles.touchable1} onPress={() => navigation.navigate('Login')}>
        <View>
         <Text style={styles.touchableText}> Let's go shopping </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback style={styles.touchable} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.touchableText}> Sign-Up </Text>
      </TouchableWithoutFeedback>
    </View>

    </ImageBackground>
     
  );

}


const styles = StyleSheet.create({

  touchable1: {
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    width: 300,
    height: 50,
    justifyContent: 'center',
    marginBottom: 40
  },

    touchable: {
      borderRadius: 15,
      backgroundColor: '#f0f0f0',
      width: 300,
      height: 50,
      justifyContent: 'center',
    },

  touchableText: {
    textAlign: 'center',
    fontWeight: 'bold',

  },

  container: {
    flex: 1,
    // marginTop: -100,
    backgroundColor: '#f7feff',
    resizeMode: 'contain',
        
  },

  viewContainer: {
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 1,
    marginTop:160
  },

  Welcome : {
    color:'#ffffff',
    fontWeight: 'bold',
    flexDirection: 'row',
    fontSize: 25, 
    paddingTop:50,
    fontFamily: 'monospace',
    marginBottom: 50
},
Input:{
    borderWidth:1,
    borderColor: '#000000',
    borderRadius: 8,
    padding: 8,
    width: 200,
    marginTop: 20,
    
}
});