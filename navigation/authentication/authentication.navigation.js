import React from 'react';
import {StackNavigator, StackScreen} from "../../utils";
import LoginScreen from "../../screens/authentication/login.screen";
import ForgotPasswordScreen from "../../screens/authentication/forgot-password.screen";
import RegisterScreen from "../../screens/authentication/register.screen";
import {ROUTER} from "../../constants";

const AuthenticationNavigation = () => {
  return (
    <StackNavigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName={ROUTER.AUTHENTICATION.LOGIN_SCREEN}
    >
      <StackScreen
          name={ROUTER.AUTHENTICATION.LOGIN_SCREEN}
          component={LoginScreen}/>
        <StackScreen
            name={ROUTER.AUTHENTICATION.FORGOT_PASSWORD_SCREEN}
            component={ForgotPasswordScreen}/>
        <StackScreen
            name={ROUTER.AUTHENTICATION.REGISTER_SCREEN}
            component={RegisterScreen}/>
    </StackNavigator>
  )
}

export default AuthenticationNavigation;
