import React from 'react';
import {TabScreen, TabNavigator} from "../utils";
import HomeNavigation from "./home.navigation";
import UserNavigation from "./user/user.navigation";
import {HomeIcon, UserIcon} from "react-native-heroicons/solid";
import {Platform} from "react-native";

const MainBottomTab= () => {

    return (
        <TabNavigator
            initialRouteName={"HOME_NAVIGATION"}
            screenOptions={{
                tabBarStyle: {
                    height: Platform.OS === 'android' ? 80 : 70,
                },
                headerShown: false,
            }}
        >
            <TabScreen
                name={"HOME_NAVIGATION"}
                component={HomeNavigation}
                options={{
                    tabBarIcon: () => <HomeIcon color="black" size={30} />,
                    tabBarLabel: () => null,
                }}
            />


            <TabScreen
                name={"USER_NAVIGATION"}
                component={UserNavigation}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: () => <UserIcon color="black" size={30} />,
                }}
            />
        </TabNavigator>
    );
};

export default MainBottomTab;