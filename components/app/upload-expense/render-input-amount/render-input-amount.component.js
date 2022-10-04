import React from "react";

import {StyleSheet, Text, TextInput, View} from "react-native";
import {CurrencyDollarIcon} from "react-native-heroicons/outline";
import {BLACK_COLOR, GRAY_COLOR, INPUT_GRAY_COLOR} from "../../../../constants";
import {deviceWidth, getFontScaledSize} from "../../../../utils";

const AMOUNT_TITLE = "Amount";
const INPUT_YOUR_AMOUNT_PLACEHOLDER = "Input your amount...";

const RenderInputAmount = (props) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.inputTitleContainer}>
                <Text style={styles.inputTitleText}>
                    {AMOUNT_TITLE}
                </Text>
            </View>
            <View style={styles.inputInnerContainer}>
                <View style={styles.inputInnerLogoContainer}>
                    <CurrencyDollarIcon color={GRAY_COLOR} size={getFontScaledSize(36)}/>
                </View>
                <TextInput
                    numberOfLines={1}
                    value={props.expenseAmount}
                    keyboardType="number-pad"
                    style={styles.inputInnerTextInput}
                    onChangeText={props.setExpenseAmount}
                    placeholder={INPUT_YOUR_AMOUNT_PLACEHOLDER}
                    placeholderColor={GRAY_COLOR}>
                </TextInput>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        paddingTop: 10,
    },
    inputTitleContainer: {
        paddingBottom: 6,
    },
    inputTitleText: {
        color: BLACK_COLOR,
        fontWeight: '600',
        fontSize: getFontScaledSize(23)
    },
    inputInnerContainer: {
        flexDirection: 'row'
    },
    inputInnerLogoContainer: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: INPUT_GRAY_COLOR,
        height: 50,
        width: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputInnerTextInput: {
        fontWeight: '600',
        fontSize: getFontScaledSize(23),
        borderLeftColor: GRAY_COLOR,
        borderLeftWidth: 1,
        height: 50,
        width: deviceWidth / 1.35,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: INPUT_GRAY_COLOR,
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    inputInnerTextPlaceholder: {
        color: GRAY_COLOR,
        fontWeight: '600',
        fontSize: deviceWidth / 21
    },

});

export default RenderInputAmount;