import React from 'react';
import {StackNavigator, StackScreen} from "../utils";
import HomeScreen from "../screens/home/home.screen";
import UploadExpenseNavigation from "./upload-expense/upload-expense.navigation";
import ViewExpensesNavigation from "./view-expenses/view-expenses.navigation";
import {ROUTER} from "../constants";

const HomeNavigation = () => {
  return (
    <StackNavigator
      initialRouteName={ROUTER.HOME.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackScreen
          name={ROUTER.HOME.HOME_SCREEN}
          component={HomeScreen}
      />
      <StackScreen
          name={ROUTER.HOME.UPLOAD_EXPENSE.UPLOAD_EXPENSE_ROUTE}
          component={UploadExpenseNavigation}
      />
      <StackScreen
          name={ROUTER.HOME.EXPENSES.EXPENSES_ROUTE}
          component={ViewExpensesNavigation}
      />
    </StackNavigator>
  )
};

export default HomeNavigation;
