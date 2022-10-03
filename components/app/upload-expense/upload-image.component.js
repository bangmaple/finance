import React, {useEffect, useState} from 'react';
import {deviceHeight, deviceWidth} from "../../../utils";
import {Text, TouchableOpacity, View, StyleSheet, Image} from "react-native";
import {GRAY_COLOR, INPUT_GRAY_COLOR} from "../../../constants";
import {CameraIcon} from "react-native-heroicons/solid";
import {launchImageLibrary} from "react-native-image-picker";

const UploadImage = (props) => {

    const [image, setImage] = useState();

    useEffect(() => {
        console.log(image)
    }, [image]);

    const BlankImage = () => {
        return (
            <>
                <CameraIcon color={GRAY_COLOR} size={deviceWidth / 10}/>
                <Text style={styles.containerPlaceholder}>Upload your image here...</Text>
            </>
        );
    }

    const handleOpenImagePicker = async () => {
        const response = await launchImageLibrary({
            mediaType: 'photo',
            selectionLimit: 1,
            includeExtra: false,
        });
        const asset = response.assets[0];
        setImage(asset);
    }

    return (
        <TouchableOpacity onPress={() => handleOpenImagePicker()} style={styles.container}>
            {image ? <Image style={styles.imageContainer} source={image}/> : <BlankImage/>}
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    container: {
        height: deviceHeight / 4.6,
        width: deviceWidth / 1.15,
        borderRadius: 8,
        backgroundColor: INPUT_GRAY_COLOR,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerPlaceholder: {
        color: GRAY_COLOR,
        fontWeight: '600',
        fontSize: deviceWidth / 23
    },
    imageContainer: {
        maxHeight: deviceHeight / 4.6,
        maxWidth: deviceWidth / 1.15,
        resizeMode: 'contain'
    }
});

export default UploadImage;