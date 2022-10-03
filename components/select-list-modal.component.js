import React, {useState} from 'react';
import AlertModal from "./alert-modal.component";
import {deviceHeight, deviceWidth} from "../utils";
import {StyleSheet, Text, TouchableOpacity, View, VirtualizedList} from "react-native";
import {ORANGE_COLOR, WHITE_COLOR} from "../constants";
import {CheckIcon, XMarkIcon} from "react-native-heroicons/outline";

const SelectListModal = (props) => {

    const [selectedItem, setSelectedItem] = useState(props.selectedItem);

    const handleConfirmData = () => {
        props.setData(selectedItem);
        props.toggleShown();
    };

    const handleOnPressItem = (itemId) => {
        setSelectedItem(itemId);
    }

    const RenderItem = ({item}) => {
        return (
                <TouchableOpacity style={[{
                    paddingVertical: 10,
                    flexWrap: 'wrap',
                    display: 'flex',
                    flex: 1,
                    alignItems: 'flex-start',
                    width: deviceWidth / 1.35,
                    paddingHorizontal: 10,
                }, item.id === selectedItem ? {
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: ORANGE_COLOR,

                } : null]} onPress={() => handleOnPressItem(item.id)}>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
        );
    }

    return (
        <AlertModal
            isOpened={props.isOpened ? props.isOpened : false}
            toggleShown={() => null}
            height={props.height ? props.height : deviceHeight / 2.2}
            width={props.width ? props.width : deviceWidth / 1.15}
        >
            <View style={styles.container}>
                {props.title ? <View>
                    <Text style={styles.headerTitleText}>
                        {props.title}
                    </Text>
                </View> : null}
                {props.data ? <VirtualizedList
                    style={{
                        maxHeight: deviceHeight / 3.6
                    }}
                    showsVerticalScrollIndicator={false}
                    data={props.data}
                    getItemCount={(data) => data.length}
                    getItem={(data, index) => data[index]}
                    renderItem={(item) => <RenderItem item={item.item}/>}
                /> : null}
                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.cancelButton} onPress={() => props.toggleShown()}>
                        <XMarkIcon size={deviceWidth / 16} color={ORANGE_COLOR}/>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.confirmButton} onPress={() => handleConfirmData()}>
                        <CheckIcon color={WHITE_COLOR} size={deviceWidth / 16}/>
                        <Text style={[styles.buttonText, {color: WHITE_COLOR}]}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </AlertModal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerTitleText: {
        fontWeight: '600',
        fontSize: deviceWidth / 23,
        paddingTop: 10,
        paddingBottom: 6,
    },
    footerContainer: {
        paddingBottom: 16,
        flexDirection: 'row',
        width: deviceWidth / 1.3,
        display: 'flex',
        justifyContent: 'space-between'
    },
    cancelButton: {
        height: deviceHeight / 21,
        backgroundColor: WHITE_COLOR,
        borderRadius: 8,
        borderColor: ORANGE_COLOR,
        borderWidth: 2,
        width: deviceWidth / 2.8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    confirmButton: {
        height: deviceHeight / 21,
        backgroundColor: ORANGE_COLOR,
        borderRadius: 8,
        width: deviceWidth / 2.8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonText: {
        color: ORANGE_COLOR,
        fontSize: deviceWidth / 21,
        fontWeight: '600',
        paddingLeft: 6
    }
});

export default SelectListModal;