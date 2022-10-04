import React from "react";
import {StyleSheet} from "react-native";
import SelectListModal from "../../../select-list-modal.component";
import {PROJECTS, SALE_TYPES} from "../../../../faker-data";

const TAG_TO_PROJECT_SELECT_TITLE = "Select a project";

const RenderTagToProjectListModal = (props) => {
    if (props.isShown) {
        return <SelectListModal
            title={TAG_TO_PROJECT_SELECT_TITLE}
            selectedItem={props.itemId}
            toggleShown={() => props.toggleShown}
            isOpened={props.isShown}
            data={PROJECTS}
            setData={props.setItemId}/>
    }
    return null;
};

const styles = StyleSheet.create({

});

export default RenderTagToProjectListModal;