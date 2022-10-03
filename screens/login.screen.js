import React, {useEffect, useState} from 'react';
import LoginBackground from '../assets/background/login-background.svg';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import {deviceHeight, deviceWidth} from "../utils";
import {BLACK_COLOR, INPUT_GRAY_COLOR, RED_COLOR, WHITE_COLOR} from "../constants";
import {boxShadow} from "../utils";
import Button from "../components/button.component";
import {LockOpenIcon} from "react-native-heroicons/outline";
import auth from '@react-native-firebase/auth';
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {setAuthenticatedUser} from "../redux/slices/user";

const LoginScreen = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  });

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    console.log(user);
  }, [user]);


  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const logOut = () => {
    auth()
        .signOut()
        .then(() => console.log('User signed out!'));
  }

  const handleLogin = () => {
    console.log(credentials);
    auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then((e) => {
          dispatch(setAuthenticatedUser(user));
          console.log(user);
          setUser(e.user);
          console.log('User account created & signed in!');
          navigation.navigate("HOME");
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
  };

  return (
    <>

      <LoginBackground style={{
        position: 'absolute',
      }}/>
      <SafeAreaView style={styles.wrapper}>
        <View style={[styles.loginContainer, boxShadow(styles)]}>
          <View style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 0.6
          }}>
            <View style={{ width: deviceWidth / 1.35, paddingBottom: 16}}>
              <View style={{flexDirection: 'row', alignSelf: 'flex-start', paddingBottom: 8}}>
                <Text style={{color: BLACK_COLOR, fontWeight: '600', fontSize: deviceWidth / 23}}>Username</Text>
                <Text style={{color: RED_COLOR, fontWeight: '600'}}>*</Text>
              </View>
              <TextInput
                  onChangeText={(val) => setCredentials({...credentials, email: val})}
                  placeholderTextColor={INPUT_GRAY_COLOR}
                         placeholder="Your username..." style={{
                height: deviceHeight / 20,
                paddingHorizontal: 10,
                borderRadius: 8,
                borderColor: INPUT_GRAY_COLOR,
                borderWidth: 1,
                width: deviceWidth / 1.35
              }}>
              </TextInput>
            </View>

            <View style={{ width: deviceWidth / 1.35, display: 'flex'}}>
              <View style={{flexDirection: 'row', alignSelf: 'flex-start', paddingBottom: 8}}>
                <Text style={{color: BLACK_COLOR, fontWeight: '600', fontSize: deviceWidth / 23}}>Password</Text>
                <Text style={{color: RED_COLOR, fontWeight: '600'}}>*</Text>
              </View>
              <TextInput
                  onChangeText={(val) => setCredentials({...credentials, password: val})}
                  secureTextEntry placeholderTextColor={INPUT_GRAY_COLOR} placeholder="Your password..." style={{
                height: deviceHeight / 20,
                paddingHorizontal: 10,
                borderRadius: 8,
                borderColor: INPUT_GRAY_COLOR,
                borderWidth: 1,
                width: deviceWidth / 1.35
              }}>
              </TextInput>
            </View>
          </View>

          <Button styles={styles.loginButton} onPress={() => handleLogin()}>
            <LockOpenIcon color={WHITE_COLOR} size={deviceWidth / 16}/>
            <Text style={styles.loginButtonText}>Login</Text>
          </Button>

        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    flex: 1
  },
  loginContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    height: deviceHeight / 2.8,
    width: deviceWidth / 1.15,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: WHITE_COLOR
  },
  loginButton: {
    width: deviceWidth / 1.35,
    height: deviceHeight / 20,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  loginButtonText: {
    color: WHITE_COLOR,
    fontSize: deviceWidth / 21,
    fontWeight: '600',
    paddingLeft: 10,
  }
  });

export default React.memo(LoginScreen);
