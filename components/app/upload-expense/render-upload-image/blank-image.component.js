import React from 'react';
import {CameraIcon} from "react-native-heroicons/solid";
import {GRAY_COLOR} from "../../../../constants";
import {deviceWidth, getFontScaledSize} from "../../../../utils";
import {StyleSheet, Text} from "react-native";

const UPLOAD_YOUR_IMAGE_HERE_PLACEHOLDER = "Upload your image here...";

const BlankImage = () => {
    return (
        <>
            <CameraIcon color={GRAY_COLOR} size={getFontScaledSize(40)}/>
            <Text style={styles.containerPlaceholder}>
                {UPLOAD_YOUR_IMAGE_HERE_PLACEHOLDER}
            </Text>
        </>
    );
};

const styles = StyleSheet.create({
    containerPlaceholder: {
        color: GRAY_COLOR,
        fontWeight: '600',
        fontSize: getFontScaledSize(23)
    },
});

export default React.memo(BlankImage);