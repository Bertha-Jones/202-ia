import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Settings,
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
           backgroundColor:'#ffffff',
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
            style={{height: 100, width: 120, borderRadius: 10, flex: 1}}
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
                backgroundColor: '#030c21',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 22, color:'#ffffff', fontWeight: 'bold'}}>
                +
              </Text>
            </View>
          </View> 
        </View>
      </TouchableOpacity>
    );
  };

  return (
      <View style={style.header}>
        <Image source = {require ('../assets/images/betty.png')} style={{height: 100, width: 130,borderRadius:30,alignSelf:'center' }}/>

        <View style ={{alignSelf:'center'}}>
             <Text style={{fontSize: 35, color:'#030c21', fontWeight: 'bold', fontFamily: 'sans-serif', padding: 9 }}>
                PRODUCTS
             </Text>
        </View>

        <View style={{
          flexDirection: 'row',
          marginTop: 5,
          justifyContent: 'space-between'
         }}>

           <View style={{marginLeft: 15, marginTop: 15}}>
              <TouchableHighlight onPress={() => navigation.navigate('Cart')}>
                <Icon name="shopping-cart" size={30} />
              </TouchableHighlight>
           </View>
           
            <View style={{marginTop:5, flexDirection: 'row', justifyContent: 'center',}}>
              <View style={style.searchContainer}>
                <Icon name="search" size={25} style={{marginLeft: 20}} />
                <TextInput placeholder="enter search here" style={style.input} />
              </View> 
            </View>

            <View style={{marginTop: 15, marginRight: 15}}>
             <TouchableHighlight onPress={() => navigation.navigate('settings')}>
             <Icon name = "settings" size ={30}/>
             </TouchableHighlight>
           </View>

        </View>

       <View style={{
         flex: 0.9, marginTop: 20, alignItems: 'flex-start', justifyContent: 'flex-start', 
         marginLeft: 6, marginRight: 6, borderRadius: 8    
         }}>
          <FlatList
              contentContainerStyle={{
                marginTop: 10
              }}
            numColumns={2}
            horizontal={false}
            data={products}
            renderItem={({item}) => {
              return<Card products={item}/>;
            }}
          />
       </View>
      </View>

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
    flex: 1,
    marginTop: 10,
    backgroundColor:'edeceb', 
  },
  searchContainer: {
    height: 50,
    width: 250,
    backgroundColor: '#ffffff',
    borderRadius: 60,
    justifyContent:'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 15,
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