import {Text, View, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {FlatList} from 'react-native';
import ProductDisplay from '../../../Component/ProductDisplay';
import Header from '../../../Component/HeaderComponent';

const Home = ({navigation}) => {
  const [productdata, setdata] = useState();
  let key2;
  useEffect(() => {
    Apicaller();
    // getItems();
  }, []);
  const Apicaller = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setdata(response.data);
    console.log('satvik', productdata);
  };

  return (
    <>
      <Header screen = {'Home'}/>
      <View>
        <FlatList
          data={productdata}
          renderItem={element => <ProductDisplay element={element} />}
        />
      </View>
    </>
  );
};
export default Home;
