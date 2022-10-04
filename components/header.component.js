import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {BLACK_COLOR, ORANGE_COLOR} from "../constants";
import {deviceWidth, getFontScaledSize} from "../utils";

const Header = (props) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.pop()}>
        <ChevronLeftIcon color={ORANGE_COLOR} size={getFontScaledSize(36)}/>
      </TouchableOpacity>
      <Text style={styles.titleText}>{props.text}</Text>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    position: 'absolute',
    top: 16,
    left: 16
  },
  titleText: {
    fontSize: getFontScaledSize(30),
    fontWeight: '600',
    color: BLACK_COLOR
  }
});

export default React.memo(Header);
