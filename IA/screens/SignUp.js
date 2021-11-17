import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground,Image} from 'react-native';
import { TouchableOpacity,TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function SignUp({navigation}){

return( 

  <ImageBackground style={styles.container}>
    <View> 
    <Image source = {require ('../assets/images/betty.png')} style={{height: 100, width: 130,borderRadius:30,alignSelf:'center' }}/>
        <Text style= {styles.SignUp}> SignUp To Start shopping </Text>
      <View style = {styles.TextInput}>
        <TextInput style = {styles.Input} placeholder = 'Enter your name/email'/>
        <TextInput style={styles.Input} placeholder='Enter your password' secureTextEntry={true}/>
        <TextInput style = {styles.Input} placeholder ='confirm password' secureTextEntry={true}/>
        
      </View>

     <View>
     <TouchableWithoutFeedback style={styles.touchable} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.touchableText}> Sign-Up </Text>
      </TouchableWithoutFeedback>
     </View>

      <Text style = {styles.Login}>
        Already have an account? 
        <View style={{marginTop: 20,}}>
        <Button title='LOGIN' 
        color='#000000' 
        onPress={() => navigation.navigate('Main')}/>
      </View>
      <View style={{marginTop:110,alignItems:'center'}}>

      </View>
      </Text>
    

    </View>
    </ImageBackground>

);
}

const styles = StyleSheet.create ({
  container: {
    alignContent: 'center',
    flex: 1,
    flexDirection:'column',
    paddingTop:10,
    backgroundColor:'edeceb'  
  },
  TextInput: {
    marginLeft: 50,
    marginRight: 50,
    paddingTop : 30,
    alignSelf:'center',

  },
  touchableText:{
    fontWeight:'bold',
    alignSelf:'center'

  },
  Terms:{
    paddingTop: 5,
    marginTop:200


  },
  
  
  touchable: {
    borderRadius: 20,
    backgroundColor: '#ffffff',
    width: 300,
    height: 50,
    justifyContent: 'center',
    marginTop:20,
    alignSelf:'center',
    
  },

  Login:{
    fontWeight:'bold',
    paddingRight: 30,
    paddingTop:5,
    alignSelf:'center',
    alignItems:'space-between',
    marginTop:10,
    marginRight:10
  

  },
  
   Input: {
        borderWidth:1,
        borderColor: '#000000',
        borderRadius: 30,
        padding: 10,
        width: 300,
        height:50,
        marginTop: 20,
        paddingTop:30
   
     },
     SignUp: {
       color:'#000000',
       fontWeight:'bold',
       flexDirection: 'row',
       fontSize: 20,
       paddingTop:30,
      alignSelf:'center',
     },
     
     
    });
