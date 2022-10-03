import React from 'react';
import {StackNavigator, StackScreen} from "../../utils";
import UploadExpenseScreen from "../../screens/home/upload-expense/upload-expense.screen";
import {ROUTER} from "../../constants";

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
    </StackNavigator>
  );
};

export default React.memo(UploadExpenseNavigation);
