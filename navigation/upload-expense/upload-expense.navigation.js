import React from 'react';
import {StackNavigator, StackScreen} from "../../utils";
import UploadExpenseScreen from "../../screens/upload-expense.screen";

const UploadExpenseNavigation = () => {

  return (
    <StackNavigator initialRouteName="UPLOAD_EXPENSE_SCREEN" screenOptions={{
      headerShown: false
    }}>
      <StackScreen name="UPLOAD_EXPENSE_SCREEN" component={UploadExpenseScreen}/>
    </StackNavigator>
  );
};

export default React.memo(UploadExpenseNavigation);
