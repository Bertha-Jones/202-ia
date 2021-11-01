import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import COLORS from './consts/colors';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.Welcome}>WELCOME TO BETTY'S</Text>
      <TextInput style = {styles.Input}>
         <Text>LOGIN</Text>
      </TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:-500,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
        
  },
  Welcome : {
    color:'blue',
    fontWeight: 'bold',
    flexDirection: 'row',
    fontSize: 25, 
    paddingTop:50,
    paddingLeft: 70,
   alignContent:'center'
    
},
Input:{
    borderWidth:1,
    borderColor: '#000000',
    padding: 8,
    width: 200,
    

}
});