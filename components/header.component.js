import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {BLACK_COLOR, ORANGE_COLOR} from "../constants";
import {deviceWidth} from "../utils";

const Header = (props) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.pop()}>
        <ChevronLeftIcon color={ORANGE_COLOR} size={deviceWidth / 14}/>
      </TouchableOpacity>
      <Text style={{fontSize: deviceWidth / 16, fontWeight: '600', color: BLACK_COLOR}}>{props.text}</Text>
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
  }
});

export default React.memo(Header);
