import * as  React from 'react';
import { View, Text, FlatList, TextInput, Image } from 'react-native';
import { Feather, AntDesign, Ionicons} from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import products from '../consts/products';

export default function ProductScreen ({navigation}){

    return(
        <View style={{flex: 1}}>
            <View style={{flex: 0.1, flexDirection: 'row', justifyContent: 'space-between', borderRadius: 8, borderWidth: 0.5}}>
                <TextInput style={{borderWidth: 0.6, width: 200, marginTop: 10, borderRadius: 8, marginBottom: 10, marginLeft: 5}}
                placeholder='Search for your product here'/>
            
                <TouchableHighlight onPress={() => navigation.navigate('Cart')}>
                    <View style={{marginTop: 10, marginRight: 5}}>
                    <Ionicons.Button name='ios-cart' size={30} color='grey' backgroundColor='#e6e4e1' onPress={() => navigation.navigate('Cart')}>
                    </Ionicons.Button>
                </View>
                </TouchableHighlight>
                
            </View>

            <View style={{flex: 0.8, borderRadius: 8, borderWidth: 0.6, marginTop: 10}}>
                <FlatList 
                    data = {products}
                    renderItem = {({item}) =>
                    <TouchableHighlight onPress={() => navigation.navigate('Details', products)}>
                    <View style={{
                        padding: 15, height: 230, width: 165,
                        backgroundColor: '#fff', marginBottom: 10, marginTop: 10, 
                        borderRadius: 8, marginLeft: 25, marginRight: 10
                        }}>
                          <View>
                            <Image source={{uri: item.image}}
                                  style={{height: 100, width: 100}}/>
                          </View>
                          <Text style={{textAlign: 'auto', marginTop: 10}}> {item.title} </Text>
                          <Text style={{textAlign: 'auto', marginTop: 15}}> GHS {item.price} </Text>
                      </View>
                    </TouchableHighlight>
                    }
                    horizontal={false}
                    numColumns={2}
                    />
            </View>
        </View>
    );
}