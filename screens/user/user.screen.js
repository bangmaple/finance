import React from 'react';
import {PixelRatio, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {BLACK_COLOR, ORANGE_COLOR, ROUTER, WHITE_COLOR} from "../../constants";
import {UserIcon} from "react-native-heroicons/solid";
import {boxShadow, deviceHeight, deviceWidth, getFontScaledSize} from "../../utils";
import {LockClosedIcon} from "react-native-heroicons/outline";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import UserHeader from "../../components/app/user/header.component";

const UserScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleLogout = () => {
        return navigation.replace(ROUTER.AUTHENTICATION.AUTHENTICATION_ROUTE);
    }


    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <UserHeader/>
                <View style={styles.bodyContainer}>
                    <TouchableOpacity
                        onPress={() => handleLogout()}
                        style={[styles.bodySection, boxShadow(styles)]}>
                        <View style={styles.bodySectionIcon}>
                            <LockClosedIcon color={BLACK_COLOR} size={getFontScaledSize(23)}/>
                        </View>
                        <Text style={styles.bodySectionText}>Sign out</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
    bodyContainer: {
        marginTop: 16,
        alignItems: 'center'
    },
    bodySection: {
        height: deviceHeight / 14,
        width: deviceWidth / 1.1,
        backgroundColor: WHITE_COLOR,
        borderRadius: 8,
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        display: 'flex',
    },
    bodySectionIcon: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: BLACK_COLOR,
        width: 35,
        height: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodySectionText: {
        color: BLACK_COLOR,
        fontSize: getFontScaledSize(23),
        fontWeight: '500',
        paddingLeft: 16,
    }
});

export default React.memo(UserScreen);