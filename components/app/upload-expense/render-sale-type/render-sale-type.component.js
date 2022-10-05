import React, {useEffect} from 'react';
import {useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {CircleStackIcon} from "react-native-heroicons/outline";
import {BLACK_COLOR, GRAY_COLOR, INPUT_GRAY_COLOR} from "../../../../constants";
import {deviceHeight, deviceWidth, dp, getFontScaledSize} from "../../../../utils";
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
                <TouchableOpacity onPress={() => setSelectListShow(!isSelectListShown)}
                    style={styles.inputInnerTextInput}>
                <View style={styles.inputInnerLogoContainer}>
                    <CircleStackIcon color={GRAY_COLOR} size={getFontScaledSize(36)}/>
                </View>
                <Text style={styles.inputInnerTextPlaceholder}>
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
        paddingTop: dp(20),
    },
    inputTitleContainer: {
        paddingBottom: dp(10),
    },
    inputTitleText: {
        color: BLACK_COLOR,
        fontWeight: '600',
        fontSize: getFontScaledSize(19)
    },
    inputInnerContainer: {
        flexDirection: 'row',
    
    },
    inputInnerLogoContainer: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: INPUT_GRAY_COLOR,
        height: 50,
        width: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: GRAY_COLOR,
    },
    inputInnerTextPlaceholder: {
        color: GRAY_COLOR,
        fontWeight: '600',
        fontSize: getFontScaledSize(19),
        paddingHorizontal: 10,
    },
    inputInnerTextInput: {
        flexDirection: 'row',
        fontWeight: '600',
        fontSize: getFontScaledSize(19),
        width: deviceWidth / 1.15,
        height: 50,
        borderRadius: 8,
        backgroundColor: INPUT_GRAY_COLOR,
        display: 'flex',
        alignItems: 'center'
    },
});

export default RenderSelectSaleType;