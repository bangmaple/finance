import React, {useEffect} from 'react';
import {useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {CircleStackIcon} from "react-native-heroicons/outline";
import {BLACK_COLOR, GRAY_COLOR, INPUT_GRAY_COLOR} from "../../../../constants";
import {deviceWidth, getFontScaledSize} from "../../../../utils";
import {SALE_TYPES} from "../../../../faker-data";
import RenderSaleTypeListModal from "./render-list-modal.component";

const SALE_TYPE_TITLE = "Sale type";
const SELECT_SALE_TYPE_PLACEHOLDER = "Select your sale type...";

const RenderSelectSaleType = (props) => {

    const [isSelectListShown, setSelectListShow] = useState();
    const [itemId, setItemId] = useState();

    useEffect(() => {
        props.setSaleTypeExpense(itemId);
    }, [itemId]);

    const RenderSaleTypePlaceholder = () => {
        if (itemId) {
            return SALE_TYPES
                .find((saleType) => saleType.id === itemId).name;
        }
        return SELECT_SALE_TYPE_PLACEHOLDER;
    }


    return (
        <View style={styles.inputContainer}>
            <View style={styles.inputTitleContainer}>
                <Text style={styles.inputTitleText}>
                    {SALE_TYPE_TITLE}
                </Text>
            </View>
            <View style={styles.inputInnerContainer}>
                <View style={styles.inputInnerLogoContainer}>
                    <CircleStackIcon color={GRAY_COLOR} size={getFontScaledSize(36)}/>
                </View>
                <TouchableOpacity
                    onPress={() => setSelectListShow(!isSelectListShown)}
                    style={styles.inputInnerTextInput}>
                    <Text
                        style={styles.inputInnerTextPlaceholder}>
                        <RenderSaleTypePlaceholder/>
                    </Text>
                </TouchableOpacity>
            </View>
            <RenderSaleTypeListModal
                isShown={isSelectListShown}
                toggleShown={() => setSelectListShow(!isSelectListShown)}
                itemId={itemId}
                setItemId={(val) => setItemId(val)}
            />
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
        fontSize: getFontScaledSize(23)
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
        fontSize: getFontScaledSize(23)
    },
    inputInnerTextInput: {
        fontWeight: '600',
        fontSize: deviceWidth / 21,
        borderLeftColor: GRAY_COLOR,
        borderLeftWidth: 1,
        width: deviceWidth / 1.35,
        height: 50,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: INPUT_GRAY_COLOR,
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
});

export default RenderSelectSaleType;