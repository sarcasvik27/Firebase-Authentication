import styles from '../../Loginpage/style/Loginstyle';
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';
const Signup = ({navigation}) => {
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [fnameerror, setfnameerror] = useState('');
  const [lnameerror, setlnameerror] = useState('');
  const [emailerror, setemailerror] = useState('');
  const [passworderror, setpassworderror] = useState('');
  const [emailstate, setemailstate] = useState(false);
  const [passwordstate, setpasswordstate] = useState(false);
  const [fnamestate, setfnamestate] = useState(false);
  const [lnamestate, setlnamestate] = useState(false);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regpswrd =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  let regexname =/^[a-z ,.'-]+$/;
  const token = moment().format();
  const userObject = {
    TOKEN: token,
    FNAME: fname,
    LNAME: lname,
    EMAIL: email,
    PASSWORD: password,
  };
  const storeData = async () => {
    await firestore().collection('testing').doc(token).set(userObject);
  };

  const empty = () => {
    return setemailerror('');
  };
  const emptyfname = () => {
    return setfnameerror('');
  };
  const emptylname = () => {
    return setlnameerror('');
  };
  const emptypassword = () => {
    return setpassworderror('');
  };
  const fname_validation = () => {
    if (fname == '') {
      setfnameerror("Name can't be empty");
    } else if (regexname.test(fname)) {
      setfnamestate(true);
      setfnameerror('');
    } else {
      setfnameerror('Invalid name');
    }
  };
  const lname_validation = () => {
    if (lname == '') {
      setlnameerror("Surname can't be empty");
    } else if (regexname.test(lname)) {
      setlnamestate(true);
      setlnameerror('');
    } else {
      setlnameerror('Invalid surname');
    }
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
    lname_validation();
    fname_validation();
    if (emailstate && passwordstate) {
      yourFunction();
    }
  };
   const yourFunction = () => {
       storeData();
       setemailstate(false);
       setpasswordstate(false);
       empty();
       emptypassword();
  //    console.log(token);
 // navigation.navigate('Home');
  };
  return (
    <>
      <View style={styles.div}>
        <Text style={{fontSize: 20, color: 'black'}}> Sign Up </Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={fname}
          onChangeText={fname => setfname(fname)}
          onChange={emptyfname}></TextInput>
        <Text>{fnameerror}</Text>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lname}
          onChangeText={lname => setlname(lname)}
          onChange={emptylname}></TextInput>
        <Text>{lnameerror}</Text>
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
          <Text style={{color: 'white'}}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Signup;
