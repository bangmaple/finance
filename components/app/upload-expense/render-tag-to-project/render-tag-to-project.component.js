import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {BLACK_COLOR, GRAY_COLOR, INPUT_GRAY_COLOR} from "../../../../constants";
import {deviceWidth, getFontScaledSize} from "../../../../utils";
import {QueueListIcon} from "react-native-heroicons/outline";
import RenderTagToProjectListModal from "./render-list-modal.component";

const TAG_TO_PROJECT_TITLE = "Tag to project";
const TAG_TO_PROJECT_PLACEHOLDER = "Select a project...";

const RenderTagToProject = () => {

    const [isShown, setShown] = useState(false);
    const [itemId, setItemId] = useState();

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    {TAG_TO_PROJECT_TITLE}
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputIconContainer}>
                    <QueueListIcon color={GRAY_COLOR} size={getFontScaledSize(36)}/>
                </View>
                <TouchableOpacity style={styles.inputTextContainer}>
                    <Text style={styles.inputText}>
                        {TAG_TO_PROJECT_PLACEHOLDER}
                    </Text>
                </TouchableOpacity>
            </View>
            <RenderTagToProjectListModal
                itemId={itemId}
                setItemId={(val) => setItemId(val)}
                isShown={isShown}
                toggleShown={() => setShown(!isShown)}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    titleContainer: {
        paddingBottom: 6,
    },
    titleText: {
        color: BLACK_COLOR,
        fontSize: getFontScaledSize(23),
        fontWeight: '600'
    },
    inputContainer: {
        flexDirection: 'row'
    },
    inputIconContainer: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: INPUT_GRAY_COLOR,
        height: 50,
        width: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputTextContainer: {
        borderLeftColor: GRAY_COLOR,
        borderLeftWidth: 1,
        height: 50,
        width: deviceWidth / 1.6,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: INPUT_GRAY_COLOR,
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    inputText: {
        color: GRAY_COLOR,
        fontWeight: '600',
        fontSize: getFontScaledSize(23)
    }
});

export default RenderTagToProject;