import React from 'react';
import {Modal, View, StyleSheet} from "react-native";
import {WHITE_COLOR} from "../constants";
import {deviceWidth} from "../utils";

const AlertModal = (props) => {

  return (
    <Modal
      animationType="fade"
      onRequestClose={() => props.toggleShown(!props.isOpened)}
      transparent={true}
      style={styles.container}
      visible={props.isOpened}
    >
      <View style={styles.wrapper}>
        <View
          style={[
            styles.modal,
            {
              height: props.height,
              width: props.width,
            },
          ]}
        >
          {props.children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
    borderRadius: 8,
    width: deviceWidth / 1.25,
    height: deviceWidth / 1.25,
  },
});

export default React.memo(AlertModal);
