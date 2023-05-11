import React, { useEffect } from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Button} from 'react-native';
import auth from '@react-native-firebase/auth';
function GoogleSignIn() {
  useEffect(()=>{ GoogleSignin.configure({
    // webClientId:
    //   '85842377337-pi5do10q2441upg44g3m6fd33aif4f24.apps.googleusercontent.com',
  }),[]})

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <Button
      title="Google Sign-In"
      onPress={() =>
        onGoogleButtonPress().then(() => console.log('Signed in with Google!'))
      }
    />
  );
}
export default GoogleSignIn;
