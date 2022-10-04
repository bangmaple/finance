import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {BLACK_COLOR, GRAY_COLOR, INPUT_GRAY_COLOR} from "../../../../constants";
import {
    convertYearMonthDateToMonthDateYear,
    deviceWidth,
    getFontScaledSize,
} from "../../../../utils";
import {CalendarIcon} from "react-native-heroicons/outline";
import RenderCalendarModal from "./calendar-modal.component";

const TRANSACTION_DATE_TITLE = "Transaction date";

const RenderSelectTransactionDate = (props) => {

    const [isModalShown, setModalShown] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    {TRANSACTION_DATE_TITLE}
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputIconContainer}>
                    <CalendarIcon color={GRAY_COLOR} size={getFontScaledSize(36)}/>
                </View>
                <TouchableOpacity
                    style={styles.inputTextContainer}
                    onPress={() => setModalShown(!isModalShown)}>
                    <Text style={styles.inputText}>
                        {convertYearMonthDateToMonthDateYear(props.expenseTransactionDate)}
                    </Text>
                </TouchableOpacity>
            </View>
            <RenderCalendarModal
                isShown={isModalShown}
                toggleShown={() => setModalShown(!isModalShown)}
                transactionDate={props.expenseTransactionDate}
                setTransactionDate={props.setExpenseTransactionDate}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingTop: 10,
        width: deviceWidth / 1.15,
    },
    titleContainer: {
        paddingBottom: 6,
    },
    titleText: {
        color: BLACK_COLOR,
        fontSize: getFontScaledSize(23),
        fontWeight: '600'
    },
    inputContainer: {
        flexDirection: 'row'
    },
    inputIconContainer: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: INPUT_GRAY_COLOR,
        height: 50,
        width: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputTextContainer: {
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
    inputText: {
        color: GRAY_COLOR,
        fontSize: getFontScaledSize(21),
        fontWeight: '600'
    }
});

export default RenderSelectTransactionDate;