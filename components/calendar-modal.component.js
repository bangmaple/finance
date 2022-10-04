import React, {useEffect, useState} from 'react';
import AlertModal from "./alert-modal.component";
import {deviceHeight, deviceWidth, getFontScaledSize} from "../utils";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {BLACK_COLOR, ORANGE_COLOR, WHITE_COLOR} from "../constants";
import {Calendar} from "react-native-calendars/src/index";
import {CheckIcon, XMarkIcon} from "react-native-heroicons/outline";
import {ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/solid";

const CalendarModal = (props) => {

    const [date, setDate] = useState(props.value);

    const Footer = () => {

        const handleConfirm = () => {
            props.setValue(date);
            props.toggleOpened();
        };

        return (
            <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.cancelButton} onPress={() => props.toggleOpened()}>
                    <XMarkIcon color={ORANGE_COLOR} size={getFontScaledSize(30)}/>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmButton} onPress={() => handleConfirm()}>
                    <CheckIcon color={WHITE_COLOR} size={getFontScaledSize(30)}/>
                    <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <AlertModal
            height={props.height ? props.height : deviceHeight / 1.85}
            width={props.width ? props.width : deviceWidth / 1.15}
            isOpened={props.isOpened}
            toggleShown={() => null}>
            {props.title ? <Text style={styles.title}>{props.title}</Text> : null}
            <Calendar
                renderArrow={(direction) => direction === 'left'
                    ? <ChevronLeftIcon color={ORANGE_COLOR} size={getFontScaledSize(36)}/>
                    : <ChevronRightIcon color={ORANGE_COLOR} size={getFontScaledSize(36)}/>}
                markedDates={{
                    [date]: {selected: true, selectedColor: ORANGE_COLOR},
                }}
                initialDate={date}
                date={date}
                maxDate={props.maxDate ? props.maxDate : undefined}
                minDate={props.minDate}
                onDayPress={(day) => setDate(day.dateString)}
                style={{
                    width: props.width ? props.width : deviceWidth / 1.15,
                }}
                theme={{

                    todayButtonFontSize: getFontScaledSize(23),
                    textMonthFontSize: getFontScaledSize(23),
                    textDayHeaderFontSize: getFontScaledSize(16),
                    textDayFontSize: getFontScaledSize(16),
                    'stylesheet.calendar.header': {
                        monthText: {
                            fontSize: getFontScaledSize(23),
                            fontWeight: '600', // default is 300
                            color: BLACK_COLOR,
                        },
                        dayTextColor: {
                            fontSize: getFontScaledSize(23),
                            fontWeight: '600', // default is 300
                            color: BLACK_COLOR,
                        }
                    }
                }}
            />
            <Footer/>
        </AlertModal>
    );
};

const styles = StyleSheet.create({
    title: {
        color: BLACK_COLOR,
        fontWeight: '600',
        fontSize: getFontScaledSize(23)
    },
    cancelButton: {
        borderWidth: 2,
        borderRadius: 8,
        borderColor: ORANGE_COLOR,
        height: deviceHeight / 18,
        width: deviceWidth / 3,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerContainer: {
        flexDirection: 'row',
        display: 'flex',
        width: deviceWidth / 1.15,
        justifyContent: 'space-around',
        paddingTop: 8,
    },
    cancelButtonText: {
        paddingLeft: 10,
        color: ORANGE_COLOR,
        fontSize: getFontScaledSize(21),
        fontWeight: '600'
    },
    confirmButton: {
        borderRadius: 8,
        backgroundColor: ORANGE_COLOR,
        height: deviceHeight / 18,
        width: deviceWidth / 3,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    confirmButtonText: {
        paddingLeft: 10,
        color: WHITE_COLOR,
        fontSize: getFontScaledSize(21),
        fontWeight: '600'
    }
});

export default CalendarModal;