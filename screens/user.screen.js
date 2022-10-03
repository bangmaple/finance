import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {BLACK_COLOR, ORANGE_COLOR, WHITE_COLOR} from "../constants";
import {UserIcon} from "react-native-heroicons/solid";
import {boxShadow, deviceHeight, deviceWidth} from "../utils";
import {LockClosedIcon} from "react-native-heroicons/outline";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import UserHeader from "../components/app/user/header.component";

const UserScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleLogout = () => {
        return navigation.replace("LOGIN");
    }



    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{
                display: 'flex',
            }}>
                <UserHeader/>
                <View style={{  marginTop: 16,
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => handleLogout()} style={{
                        height: deviceHeight / 14,
                        width: deviceWidth / 1.1,
                        backgroundColor: WHITE_COLOR,
                        borderRadius: 8,
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        flexDirection: 'row',
                        display: 'flex',
                        ...boxShadow(styles),
                    }}>
                        <View style={{
                            borderRadius: 8,
                            borderWidth: 1,
                            borderColor: BLACK_COLOR,
                            width: 35,
                            height: 35,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <LockClosedIcon color={BLACK_COLOR} size={deviceWidth / 16}/>
                        </View>
                        <Text style={{color: BLACK_COLOR,
                            fontSize: deviceWidth / 23, fontWeight: '500',
                        paddingLeft: 16,}}>Sign out</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

});

export default React.memo(UserScreen);