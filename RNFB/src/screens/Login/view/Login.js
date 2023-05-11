import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  
  const getdata = async () => {
    try {
      const data= await auth().createUserWithEmailAndPassword(email,password)
      console.log("values ARE:",data);}
      

    catch (error) {
      console.error(error);
    }
      console.log("click1");
  };
  return (
    <>
      <TextInput
        style={{
          height: 30,
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 50,
          padding: 0,
        }}
        placeholder="Your email"
        value={email}
        onChangeText={value => setemail(value)}></TextInput>
      <TextInput
        style={{
          height: 30,
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 30,
          padding: 0,
        }}
        placeholder="Your password"
        value={password}
        onChangeText={value => setpassword(value)}></TextInput>
      <TouchableOpacity
        style={{
          backgroundColor: 'orange',
          borderWidth: 1,
          height: 30,
          width: 70,
          borderRadius: 20,
          marginTop: 20,
        }}
        onPress={getdata}
      >
        <Text>Login</Text>
        </TouchableOpacity>
    </>
  );
};
export default Login;
