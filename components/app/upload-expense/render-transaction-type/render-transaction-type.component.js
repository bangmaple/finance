import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {BLACK_COLOR, GRAY_COLOR, INPUT_GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR} from "../../../../constants";
import {deviceHeight, deviceWidth, getFontScaledSize} from "../../../../utils";

const TRANSACTION_TYPE_TITLE = "Transaction Type";
const TRANSACTION_TYPE_CASH_TEXT = "CASH";
const TRANSACTION_TYPE_BANK_TEXT = "BANK";

const RenderTransactionType = (props) => {

    const RenderCashSection = () => {
        return (
            <TouchableOpacity
                onPress={() => props.setExpenseTransactionType('CASH')}
                style={[styles.transactionTypeCashContainer, {
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
            }, props.expenseTransactionType === 'CASH'
                    ? {backgroundColor: ORANGE_COLOR}
                    : undefined
            ]}>
                <Text style={[styles.transactionTypeText,
                    props.expenseTransactionType === 'CASH'
                        ? {color: WHITE_COLOR}
                        : undefined
                ]}>{TRANSACTION_TYPE_CASH_TEXT}</Text>
            </TouchableOpacity>
        );
    }

    const RenderBankSection = () => {
        return (
            <TouchableOpacity
                onPress={() => props.setExpenseTransactionType('BANK')}
                style={[styles.transactionTypeCashContainer, {
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
            }, props.expenseTransactionType === 'BANK'
                    ? {backgroundColor: ORANGE_COLOR}
                    : undefined]}>
                <Text style={[styles.transactionTypeText,
                    props.expenseTransactionType === 'BANK'
                        ? {color: WHITE_COLOR}
                        : undefined]}>
                    {TRANSACTION_TYPE_BANK_TEXT}
                </Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    {TRANSACTION_TYPE_TITLE}
                </Text>
            </View>
            <View style={styles.bodyContainer}>
                <RenderCashSection/>
                <RenderBankSection/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingTop: 10,
    },
    titleContainer: {
        paddingBottom: 6,
    },
    titleText: {
        color: BLACK_COLOR,
        fontSize: getFontScaledSize(23),
        fontWeight: '600'
    },
    bodyContainer: {
        flexDirection: 'row'
    },
    transactionTypeCashContainer: {
        height: 50,
        width: deviceWidth / 2.3,
        backgroundColor: INPUT_GRAY_COLOR,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    transactionTypeText: {
        color: GRAY_COLOR,
        fontWeight: '600',
        fontSize: getFontScaledSize(21)
    }
});

export default RenderTransactionType;