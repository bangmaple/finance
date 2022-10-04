import React from 'react';
import {StackNavigator, StackScreen} from "../../utils";
import UploadExpenseScreen from "../../screens/home/upload-expense/upload-expense.screen";
import {ROUTER} from "../../constants";
import UploadImageListNavigation from "./upload-image-list/upload-image-list.navigation";

const UploadExpenseNavigation = () => {

  return (
    <StackNavigator
        initialRouteName={ROUTER.HOME.UPLOAD_EXPENSE.UPLOAD_EXPENSE_SCREEN}
        screenOptions={{
      headerShown: false
    }}>
      <StackScreen
          name={ROUTER.HOME.UPLOAD_EXPENSE.UPLOAD_EXPENSE_SCREEN}
          component={UploadExpenseScreen}/>
      <StackScreen
          name={ROUTER.HOME.UPLOAD_EXPENSE.UPLOAD_IMAGE_LIST.UPLOAD_IMAGE_LIST_ROUTE}
          component={UploadImageListNavigation}
      />
    </StackNavigator>
  );
};

export default React.memo(UploadExpenseNavigation);
