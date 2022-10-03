import React, {useEffect, useState} from 'react';
import AlertModal from "./alert-modal.component";
import {deviceHeight, deviceWidth} from "../utils";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {BLACK_COLOR, ORANGE_COLOR, WHITE_COLOR} from "../constants";
import {Calendar} from "react-native-calendars/src/index";
import {ArrowDownCircleIcon, ArrowRightIcon, CheckIcon, XMarkIcon} from "react-native-heroicons/outline";
import {ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/solid";

const CalendarModal = (props) => {

    const [date, setDate] = useState(props.value);

    const Footer = () => {

        useEffect(() => {
            console.log(date);
        }, [date]);

        const handleConfirm = () => {
            props.setValue(date);
            props.toggleOpened();
        };

        return (
            <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.cancelButton} onPress={() => props.toggleOpened()}>
                    <XMarkIcon color={ORANGE_COLOR} size={deviceWidth / 16}/>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmButton} onPress={() => handleConfirm()}>
                    <CheckIcon color={WHITE_COLOR} size={deviceWidth / 16}/>
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
                    ? <ChevronLeftIcon color={ORANGE_COLOR} size={deviceWidth / 16}/>
                    : <ChevronRightIcon color={ORANGE_COLOR} size={deviceWidth / 16}/>}
                markedDates={{
                    [date]: {selected: true, selectedColor: ORANGE_COLOR},
                }}
                initialDate={date}
                date={date}
                maxDate={props.maxDate ? props.maxDate : undefined}
                minDate={props.minDate}
                onDayPress={(day) => setDate(day.dateString)}
                style={{
                    width: props.width ? props.width : deviceWidth / 1.15
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
        fontSize: deviceWidth / 23
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
        fontSize: deviceWidth / 23,
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
        fontSize: deviceWidth / 23,
        fontWeight: '600'
    }
});

export default CalendarModal;