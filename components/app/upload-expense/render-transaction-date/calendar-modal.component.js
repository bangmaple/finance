import React from 'react';
import CalendarModal from "../../../calendar-modal.component";
import {deviceHeight, YEAR_MONTH_DATE} from "../../../../utils";
import dayjs from "dayjs";
import {StyleSheet} from "react-native";

const CHOOSE_TRANSACTION_DATE = "Choose a transaction date";

const RenderCalendarModal = (props) => {
    if (props.isShown) {
        return <CalendarModal
            height={deviceHeight / 1.6}
            isOpened={props.isShown}
            maxDate={dayjs().format(YEAR_MONTH_DATE)}
            value={props.transactionDate}
            setValue={props.setTransactionDate}
            title={CHOOSE_TRANSACTION_DATE}
            toggleOpened={() => props.toggleShown()}
        />
    }
    return null;
};

const styles = StyleSheet.create({

});

export default RenderCalendarModal;