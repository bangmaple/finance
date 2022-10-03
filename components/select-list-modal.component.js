import React from 'react';
import AlertModal from "./alert-modal.component";
import {deviceHeight, deviceWidth} from "../utils";

const SelectListModal = (props) => {

    return (
        <AlertModal
            isOpened={props.isOpened ? props.isOpened : false}
            toggleShown={() => null}
            height={props.height ? props.height : deviceHeight / 1.6}
            width={props.width ? props.width : deviceWidth / 1.15}
        >

        </AlertModal>
    );
};

export default SelectListModal;