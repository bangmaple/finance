import React, {useEffect} from 'react';
import {useState} from "react";
import SelectListModal from "../../select-list-modal.component";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {CircleStackIcon} from "react-native-heroicons/outline";
import {BLACK_COLOR, GRAY_COLOR, INPUT_GRAY_COLOR} from "../../../constants";
import {deviceWidth} from "../../../utils";
import {SALE_TYPES} from "../../../faker-data";

const RenderSelectSaleType = (props) => {

    const [isSelectListShown, setSelectListShow] = useState();
    const [itemId, setItemId] = useState();

    useEffect(() => {
        props.setSaleTypeExpense(itemId);
    }, [itemId]);

    const RenderSaleTypeListModal = () => {
        if (isSelectListShown) {
            return <SelectListModal
                title="Select a sale type"
                selectedItem={itemId}
                toggleShown={() => setSelectListShow(!isSelectListShown)}
                isOpened={isSelectListShown}
                data={SALE_TYPES}
                setData={(id) => setItemId(id)}/>
        }
        return null;
    }

    return (
        <View style={styles.inputContainer}>
            <RenderSaleTypeListModal/>
            <View style={styles.inputTitleContainer}>
                <Text style={styles.inputTitleText}>
                    Sales type
                </Text>
            </View>
            <View style={styles.inputInnerContainer}>
                <View style={styles.inputInnerLogoContainer}>
                    <CircleStackIcon color={GRAY_COLOR} size={deviceWidth / 14}/>
                </View>
                <TouchableOpacity
                    onPress={() => setSelectListShow(true)}
                    style={styles.inputInnerTextInput}>
                    <Text
                        style={styles.inputInnerTextPlaceholder}>
                        {itemId ? SALE_TYPES.find((st) => st.id === itemId).name : "Select your sale type..."}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        paddingTop: 10,
    },
    inputTitleContainer: {
        paddingBottom: 6,
    },
    inputTitleText: {
        color: BLACK_COLOR,
        fontWeight: '600',
        fontSize: deviceWidth / 23
    },
    inputInnerContainer: {
        flexDirection: 'row'
    },
    inputInnerLogoContainer: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: INPUT_GRAY_COLOR,
        height: 50,
        width: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputInnerTextPlaceholder: {
        color: GRAY_COLOR,
        fontWeight: '600',
        fontSize: deviceWidth / 21
    },
    inputInnerTextInput: {
        fontWeight: '600',
        fontSize: deviceWidth / 21,
        borderLeftColor: GRAY_COLOR,
        borderLeftWidth: 1,
        height: 50,
        width: deviceWidth / 1.35,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: INPUT_GRAY_COLOR,
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
});

export default RenderSelectSaleType;