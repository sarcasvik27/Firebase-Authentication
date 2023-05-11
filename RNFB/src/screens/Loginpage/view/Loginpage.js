import styles from '../style/Loginstyle';
import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Pressable} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import {Alert} from 'react-native';
const Login = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [emailerror, setemailerror] = useState('');
  const [passworderror, setpassworderror] = useState('');
  const [emailstate, setemailstate] = useState(false);
  const [passwordstate, setpasswordstate] = useState(false);
  const [storedmail, setstoredmail] = useState('');
  const [storedpassword, setstoredpassword] = useState('');
  const [firebaseemail, setfbemail] = useState(null);
  const [firebasepassword, setfbpassword] = useState(null);

  const getdata = async () => {
    try {
      const data1 = await firestore()
        .collection('testing')
        .get()
        .then(querySnapshot => {
          console.log('Total users: ', querySnapshot.size);
          querySnapshot.forEach(documentSnapshot => {
            if (
              documentSnapshot.data().EMAIL == email &&
              documentSnapshot.data().PASSWORD == password
            ) {
              console.log('correct email and passowrd');
            }
          });
        });
    } catch (err) {
      console.log(err);
    }
  };
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regpswrd =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const empty = () => {
    return setemailerror('');
  };
  const emptypassword = () => {
    return setpassworderror('');
  };
  const email_validation = () => {
    if (email == '') {
      setemailerror("Email Can't be empty");
    } else if (reg.test(email)) {
      setemailstate(true);
    } else {
      setemailerror(' Invalid mail id');
    }
  };
  const password_validation = () => {
    if (password == '') {
      setpassworderror("Password Can't be empty");
    } else if (regpswrd.test(password)) {
      setpasswordstate(true);
    } else {
      setpassworderror(
        'Password must contain minimum eight characters, at least one letter, one number and one special character:',
      );
    }
  };
  const validate = () => {
    email_validation();
    password_validation();
    if (emailstate && passwordstate) {
      getdata();
    }
  };
  const token = moment().format();
  return (
    <View style={styles.div}>
      <Text style={{fontSize: 20, color: 'black'}}> Login </Text>
      <TextInput
        style={styles.input}
        placeholder="Email   "
        value={email}
        onChangeText={email => setemail(email)}
        onChange={empty}></TextInput>
      <Text>{emailerror}</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={password => setpassword(password)}
        onChange={emptypassword}></TextInput>
      <Text>{passworderror}</Text>
      <TouchableOpacity style={styles.buttons} onPress={validate}>
        <Text style={{color: 'white'}}>Submit</Text>
      </TouchableOpacity>
      <Pressable
        style={{flex: 1, flexDirection: 'row'}}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={{marginTop: 70}}>New to the App ?</Text>
        <Text style={{color: 'green', marginTop: 70}}>Signup</Text>
      </Pressable>
    </View>
  );
};

export default Login;
