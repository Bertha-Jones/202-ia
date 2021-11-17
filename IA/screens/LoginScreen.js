import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LOGIN({navigation}){

return( 

  <ImageBackground style={styles.container}>
    <View> 
    <Image source = {require ('../assets/images/betty.png')} style={{height: 100, width: 130,borderRadius:30,alignSelf:'center' }}/>
        <Text style= {styles.SignUp}> Login to Start shopping </Text>
      <View style = {styles.TextInput}>
        <TextInput style = {styles.Input} placeholder = 'Name/Email'/>
        <TextInput style={styles.Input} placeholder='Enter your password' secureTextEntry={true}/>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between', color:'#03041c'}}>
        <Text style={styles.input2}>
            Remember me
          </Text>
          <Text style = {styles.input1}> Forgot password?</Text>
        </View>
      
      <View>
          <TouchableOpacity style={styles.touchable1} onPress={() => navigation.navigate('Main')}>
              <Text style={styles.touchableText}> Main </Text>
          </TouchableOpacity>
        </View>
        </View>
   
    </ImageBackground>

);
}

const styles = StyleSheet.create ({

    touchable1: {
      borderRadius: 30,
      backgroundColor: '#ffffff',
      width: 300,
      height: 50,
      justifyContent: 'center',
      alignSelf: 'center'
    },
    
    touchableText: {
      textAlign: 'center',
      fontWeight: 'bold'
    },

   input1: {
     marginBottom: 60,
     alignSelf: 'flex-end',
     marginTop: 5,
     padding :10,
     paddingRight:20,
     color:'#03041c'
    },
    input2:{
      marginBottom:60,
      alignSelf:'flex-start',
      marginTop:5,
      paddingLeft:20,
     padding:10

    },

  container: {
    alignContent: 'center',
    flex: 1,
    flexDirection:'column',
    paddingTop:10,
    backgroundColor:'#edeceb'  
  },
  
  
  TextInput: {
    marginLeft: 50,
    marginRight: 50,
    paddingTop : 30,
    alignSelf:'center',

  },
  Terms:{
    paddingTop: 15

  },
  Login:{
    fontWeight:'bold',
    paddingRight: 30,
    paddingTop:5,
    alignSelf:'center'

  },
  
   Input: {
        borderWidth:1,
        borderColor: '#0000000',
        borderRadius: 18,
        padding: 10,
        width: 300,
        marginTop: 20,
        
   
     },
     SignUp: {
       color:'#03041c',
       fontWeight:'bold',
       flexDirection: 'row',
       fontSize: 20,
       paddingTop:30,
      alignSelf:'center',
     },
     
     
    });
