import { Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
const FirestoreData = () => {
  const [firebase_data, onchangedata] = useState(null);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    try {
      const data = await firestore()
        .collection('testing')
        .doc('bj8aMFINZjRFa4zy40Dt')
        .get();
      console.log('hello', data);
      onchangedata(data._data);
      console.log('hello');
      console.log('hiiiiiii', firebase_data);
    } catch (err) {
      console.log(err);
    }
  };
  return(

    <>
     <Text>Name is {firebase_data.name} </Text>
    <Text>and i am {firebase_data.Profession}</Text> 
    </>
  )
};
export default FirestoreData;
