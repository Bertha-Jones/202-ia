import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {TextInput, TouchableHighlight, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import products from '../consts/products';
import COLORS from '../consts/colors';

const MainScreen = ({navigation}) => {

  const Card = ({products}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', products)}>
          
        <View style={{
           height: 225,
           backgroundColor: COLORS.light,
           width: 150,
           marginHorizontal: 2,
           borderRadius: 10,
           marginBottom: 20,
           marginLeft: 15,
           marginRight: 15,
           padding: 19,
          }}>

          <View>
            <Image
              source={{uri: products.image}}
              style={{height: 100, width: 120, borderRadius: 10}}
            />
          </View>

          <View>
          <Text style={{fontWeight: 'bold', fontSize: 10, marginTop: 10}}>
            {products.title}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              GHC{products.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.orange,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                +
              </Text>
            </View>
          </View> 
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to Bettys</Text>
          <Text style={{fontSize: 38, color: COLORS.orange, fontWeight: 'bold'}}>
              Products Shop
          </Text>
        </View>
        <TouchableHighlight onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-cart" size={30} />
        </TouchableHighlight>
        
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
      </View>
      <View>
      <FlatList
          contentContainerStyle={{
            marginTop: 10
          }}
        numColumns={2}
        data={products}
        renderItem={({item}) => {
          return<Card products={item}/>;
        }}
      />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width: 150,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MainScreen;