import React from "react";
import {StyleSheet} from "react-native";
import SelectListModal from "../../../select-list-modal.component";
import {SALE_TYPES} from "../../../../faker-data";

const SELECT_SALE_TYPE_TITLE = "Select a sale type";

const RenderSaleTypeListModal = (props) => {
    if (props.isShown) {
        return <SelectListModal
            title={SELECT_SALE_TYPE_TITLE}
            selectedItem={props.itemId}
            toggleShown={() => props.toggleShown()}
            isOpened={props.isShown}
            data={SALE_TYPES}
            setData={props.setItemId}/>
    }
    return null;
};

const styles = StyleSheet.create({

});

export default RenderSaleTypeListModal;