import React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {ORANGE_COLOR} from "../constants";

const Button = (props) => {

  return (
    <TouchableOpacity style={[styles.container, {
      ...props.styles,
    }]} onPress={() => props.onPress()}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: ORANGE_COLOR,
    borderRadius: 8
  }
});

export default Button;
