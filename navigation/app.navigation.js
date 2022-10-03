import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {StackNavigator, StackScreen} from "../utils";
import {useSelector} from "react-redux";
import Spinner from "../components/spinner.component";
import LoginScreen from "../screens/login.screen";
import HomeNavigation from "./home.navigation";
import MainBottomTab from "./main.bottom-tab.navigation";

const AppNavigation = () => {

  const isSpinnerLoading = useSelector((state) => state.app.isSpinnerLoading);

  return (
    <NavigationContainer>
      <StackNavigator
        initialRouteName={'LOGIN'}
        screenOptions={{
          headerShown: false,
        }}
      >
        <StackScreen name={'LOGIN'} component={LoginScreen} />
        <StackScreen name={'HOME'} component={MainBottomTab} />
      </StackNavigator>
      {isSpinnerLoading ? <Spinner /> : null}
    </NavigationContainer>
  );
};

export default React.memo(AppNavigation);
