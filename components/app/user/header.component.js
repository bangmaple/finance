import {PixelRatio, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {BLACK_COLOR, ORANGE_COLOR, WHITE_COLOR} from "../../../constants";
import {deviceHeight, deviceWidth} from "../../../utils";
import {UserIcon} from "react-native-heroicons/solid";
import React from "react";
import {useSelector} from "react-redux";

const UserHeader = () => {

    const user = useSelector((state) => state.user.authenticatedUser);

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TouchableOpacity>
                    <View style={styles.userAvatar}>
                        <UserIcon color={ORANGE_COLOR} size={40 / PixelRatio.getFontScale()}/>
                    </View>
                </TouchableOpacity>
                <View style={styles.userInformation}>
                    {user?.displayName ?? <Text style={styles.userFullName}>
                        {user?.displayName}
                    </Text>}
                    <Text style={styles.userEmail}>
                        {user?.email}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: WHITE_COLOR,
        height: deviceHeight / 4,
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    userAvatar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: 70,
        borderWidth: 2,
        borderColor: ORANGE_COLOR,
        borderRadius: 50
    },
    userInformation: {
        display: 'flex',
        alignItems: 'center'
    },
    userFullName: {
        color: BLACK_COLOR,
        fontWeight: '600',
        fontSize: deviceWidth / 21
    },
    userEmail: {
        color:BLACK_COLOR,
        fontWeight: '500',
        fontSize: deviceWidth / 23
    }
});

export default UserHeader;