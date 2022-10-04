import React, {useEffect, useState} from 'react';
import {deviceHeight, deviceWidth, getFontScaledSize} from "../../../../utils";
import {Text, TouchableOpacity, View, StyleSheet, Image} from "react-native";
import {GRAY_COLOR, INPUT_GRAY_COLOR, ROUTER} from "../../../../constants";
import {launchImageLibrary} from "react-native-image-picker";
import BlankImage from "./blank-image.component";
import {useNavigation} from "@react-navigation/native";

const UPLOAD_IMAGE_LIST_ROUTE = ROUTER.HOME.UPLOAD_EXPENSE.UPLOAD_IMAGE_LIST.UPLOAD_IMAGE_LIST_ROUTE;

const RenderUploadImage = (props) => {

    const navigation = useNavigation();

    const [image, setImage] = useState();

    useEffect(() => {
        console.log(image)
    }, [image]);


    const handleOpenImagePicker = async () => {
        const response = await launchImageLibrary({
            mediaType: 'photo',
            includeExtra: false,
        });
        if (response.assets?.length > 0) {
            const asset = response.assets[0];
            console.log(asset.fileSize);
            setImage(asset);
        }
    }

    const RenderImage = () => {
        if (image) {
            return <TouchableOpacity onPress={() => navigation.navigate(UPLOAD_IMAGE_LIST_ROUTE)}>
                <Image style={styles.imageContainer} source={image}/>
            </TouchableOpacity>;
        }
        return <BlankImage/>
    }

    return (
        <TouchableOpacity onPress={() => handleOpenImagePicker()} style={styles.container}>
            <RenderImage/>
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
    imageContainer: {
        maxHeight: deviceHeight / 4.6,
        maxWidth: deviceWidth / 1.15,
        resizeMode: 'contain'
    }
});

export default RenderUploadImage;