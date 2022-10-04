import React from 'react';
import {StackNavigator, StackScreen} from "../../../utils";
import {ROUTER} from "../../../constants";
import UploadImageListScreen from "../../../screens/home/upload-expense/upload-image-list.screen";

const UPLOAD_IMAGE_LIST_SCREEN = ROUTER.HOME.UPLOAD_EXPENSE.UPLOAD_IMAGE_LIST.UPLOAD_IMAGE_LIST_SCREEN;

const UploadImageListNavigation = () => {
    return (
        <StackNavigator
            initialRouteName={UPLOAD_IMAGE_LIST_SCREEN}
            screenOptions={{
                headerShown: false
            }}>
                <StackScreen
                    name={UPLOAD_IMAGE_LIST_SCREEN}
                    component={UploadImageListScreen}
                />
        </StackNavigator>
    );
};

export default UploadImageListNavigation;