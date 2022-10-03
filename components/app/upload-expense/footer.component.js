import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {deviceHeight, deviceWidth} from "../../../utils";
import {INPUT_GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR} from "../../../constants";
import {ChevronDoubleRightIcon} from "react-native-heroicons/outline";

const Footer = () => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.nextStepButton}>
                <Text style={styles.nextStepButtonText}>
                    Proceed to next step
                </Text>
                <ChevronDoubleRightIcon size={deviceWidth / 14} color={WHITE_COLOR}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: deviceHeight / 10,
        borderTopWidth: 1,
        borderTopColor: INPUT_GRAY_COLOR,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nextStepButton: {
        width: deviceWidth / 1.35,
        height: deviceHeight / 16,
        backgroundColor: ORANGE_COLOR,
        flexDirection: 'row',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nextStepButtonText: {
        color: WHITE_COLOR,
        fontSize: deviceWidth / 21,
        fontWeight: '600',
        paddingRight: 10,
    }
});

export default Footer;