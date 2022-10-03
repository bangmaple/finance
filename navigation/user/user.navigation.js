import React from 'react';
import {StackNavigator, StackScreen} from "../../utils";
import UserScreen from "../../screens/user/user.screen";

const UserNavigation = () => {

    return (
        <StackNavigator initialRouteName="USER_SCREEN" screenOptions={{
            headerShown: false,

        }}>
            <StackScreen name="USER_SCREEN" component={UserScreen}/>
        </StackNavigator>
    );
};

export default UserNavigation;