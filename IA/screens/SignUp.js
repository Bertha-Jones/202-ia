import React from 'react';
import { View, Text, Button, TextInput, StyleSheet} from 'react-native';

export default function SignUp(){

return(
    <View> 
        <Text> This is the signup page! </Text>
      <View>
        <TextInput style={styles.Input} placeholder='Enter your email'/>
        <TextInput style={styles.Input} placeholder='Enter your password' secureTextEntry={true}/>
      </View>

    </View>
);
}

const styles = StyleSheet.create ({
    Input: {
        borderWidth:1,
        borderColor: '#000000',
        borderRadius: 8,
        padding: 8,
        width: 200,
        marginTop: 20
     },
     
     
    });
