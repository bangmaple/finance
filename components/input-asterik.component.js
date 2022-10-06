import {StyleSheet, Text} from "react-native";
import React from "react";
import {RED_COLOR} from "../constants";

const InputAsterikText = (props) => {
    return (
        <Text style={[styles.inputTitleAsterik, props.style ? props.style : undefined]}>*</Text>
    );
};

const styles = StyleSheet.create({
    inputTitleAsterik: {
        color: RED_COLOR,
        fontWeight: '600'
    },
});

export default InputAsterikText;