import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';


export default function DetailScreen({navigation, route}){

    const products = route.params;

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <View style={{
                paddingHorizontal: 20,
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}> 
                <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()}/>
                <Icon name="shopping-cart" size={28} onPress={() => navigation.navigate('Cart')}/>
            </View>

            <View style={{
                marginTop: 10,
                flex: 0.45,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={{uri: products.image}} style={{
                    height: 250,
                    width: 220,
                    resizeMode: 'contain',
                    flex: 1
                }}/>
            </View>

            <View style={{
                flex: 0.55,
                marginTop: 20,
                backgroundColor: COLORS.light,
                marginHorizontal: 7,
                marginBottom: 7,
                borderRadius: 20,
            }}> 
                <Text style={{marginTop: 10, textAlign: 'center', fontSize: 19, fontWeight: 'bold'}}>
                    <Text> {products.title} </Text>
                </Text>

                <Text style = {{marginTop:40,alignSelf:'center'}}>
                    <Text > {products.description} </Text>
                </Text>
            </View>
        </SafeAreaView>
    );
}