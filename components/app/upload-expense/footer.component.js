import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {deviceHeight, deviceWidth, getFontScaledSize} from "../../../utils";
import {INPUT_GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR} from "../../../constants";
import {ChevronDoubleRightIcon} from "react-native-heroicons/outline";

const UPLOAD_EXPENSE_PROCEED_NEXT_STEP_1 = "Proceed to next step";

const Footer = (props) => {

    const handleOnSubmit = () => {
        alert(JSON.stringify(props.data));
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.nextStepButton}
                onPress={() => handleOnSubmit()}
            >
                <Text style={styles.nextStepButtonText}>
                    {UPLOAD_EXPENSE_PROCEED_NEXT_STEP_1}
                </Text>
                <ChevronDoubleRightIcon size={getFontScaledSize(26)} color={WHITE_COLOR}/>
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
        height: 50,
        backgroundColor: ORANGE_COLOR,
        flexDirection: 'row',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nextStepButtonText: {
        color: WHITE_COLOR,
        fontSize: getFontScaledSize(21),
        fontWeight: '600',
        paddingRight: 10,
    }
});

export default Footer;