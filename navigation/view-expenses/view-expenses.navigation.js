import React from 'react';
import {StackNavigator, StackScreen} from "../../utils";
import ExpenseScreen from "../../screens/home/expenses/expense.screen";
import {ROUTER} from "../../constants";
const ViewExpensesNavigation = () => {

  return (
    <StackNavigator
        initialRouteName={ROUTER.HOME.EXPENSES.EXPENSES_SCREEN}
        screenOptions={{
      headerShown: false,
    }}>
      <StackScreen
          name={ROUTER.HOME.EXPENSES.EXPENSES_SCREEN}
          component={ExpenseScreen}
      />
    </StackNavigator>
  );
};

export default ViewExpensesNavigation;
