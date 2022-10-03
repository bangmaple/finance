import React from 'react';
import {StackNavigator, StackScreen} from "../utils";
import HomeScreen from "../screens/home.screen";
import UploadExpenseNavigation from "./upload-expense/upload-expense.navigation";
import ViewExpensesNavigation from "./view-expenses/view-expenses.navigation";

const HomeNavigation = () => {
  return (
    <StackNavigator
      initialRouteName={'HOME_SCREEN'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackScreen name={"HOME_SCREEN"} component={HomeScreen}/>
      <StackScreen name={"UPLOAD_EXPENSE"} component={UploadExpenseNavigation}/>
      <StackScreen name={"VIEW_EXPENSES"} component={ViewExpensesNavigation}/>
    </StackNavigator>
  )
};

export default React.memo(HomeNavigation);
