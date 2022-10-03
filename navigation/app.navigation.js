import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {StackNavigator, StackScreen} from "../utils";
import {useSelector} from "react-redux";
import Spinner from "../components/spinner.component";
import MainBottomTab from "./main.bottom-tab.navigation";
import {ROUTER} from "../constants";
import AuthenticationNavigation from "./authentication/authentication.navigation";
import GenericAlertModal from "../components/generic-alert-modal.component";

const AppNavigation = () => {

    const isSpinnerLoading = useSelector((state) => state.app.isSpinnerLoading);
    const isGenericAlertModalShown = useSelector((state) => state.app.isGenericModalShown);

    return (
        <NavigationContainer>
            <StackNavigator
                initialRouteName={ROUTER.AUTHENTICATION.AUTHENTICATION_ROUTE}
                screenOptions={{
                    headerShown: false,
                }}
            >
                <StackScreen
                    name={ROUTER.AUTHENTICATION.AUTHENTICATION_ROUTE}
                    component={AuthenticationNavigation}
                />
                <StackScreen
                    name={ROUTER.HOME.HOME_ROUTE}
                    component={MainBottomTab}
                />
            </StackNavigator>
            {isSpinnerLoading ? <Spinner/> : null}
            {isGenericAlertModalShown ? <GenericAlertModal isShown={isGenericAlertModalShown}/> : null}
        </NavigationContainer>
    );
};

export default AppNavigation;
