import React from 'react';
import {Modal, View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {BLACK_COLOR, ORANGE_COLOR, WHITE_COLOR} from "../constants";
import {deviceHeight, deviceWidth} from "../utils";
import {useDispatch, useSelector} from "react-redux";
import {ExclamationCircleIcon} from "react-native-heroicons/outline";
import {toggleGenericAlertModalOff} from "../redux/slices/app";

const GenericAlertModal = (props) => {

  const alertModalMessage = useSelector((state) => state.app.alertModalMessage);

  const dispatch = useDispatch();

  return (
    <Modal
      animationType="fade"
      onRequestClose={() => null}
      transparent={true}
      style={styles.container}
      visible={props.isOpened}
    >
      <View style={styles.wrapper}>
        <View
          style={[
            styles.modal,
            {
              height: props.height ? props.height : deviceHeight / 4,
              width: props.width ? props.width : deviceWidth / 1.1,
            },
          ]}
        >
          <View style={styles.modalWrapper}>
            <ExclamationCircleIcon color={ORANGE_COLOR} size={deviceWidth / 8}/>
            <Text style={styles.modalMessage}>
              {alertModalMessage}
            </Text>
          </View>
          <TouchableOpacity onPress={() => dispatch(toggleGenericAlertModalOff())} style={styles.modalConfirmButton}>
            <Text style={styles.modalConfirmButtonText}>
              {props.confirmMessage ? props.confirmMessage : "OK"}
            </Text>
          </TouchableOpacity>
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
    justifyContent: 'space-between',
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: WHITE_COLOR,
    borderRadius: 8,
  },
  modalWrapper: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  modalMessage: {
    color: BLACK_COLOR,
    fontWeight: '600',
    fontSize: deviceWidth / 21,
    flexWrap: 'wrap'
  },
  modalConfirmButton: {
    backgroundColor: ORANGE_COLOR,
    borderRadius: 8,
    height: deviceHeight / 18,
    width: deviceWidth / 1.35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalConfirmButtonText: {
    color: WHITE_COLOR,
    fontSize: deviceWidth / 21,
    fontWeight: '600',
    flexWrap: 'wrap'
  }
});

export default React.memo(GenericAlertModal);
