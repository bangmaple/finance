import React from 'react';
import {StackNavigator, StackScreen} from "../../utils";
import ExpenseScreen from "../../screens/expense.screen";
import Header from "../../components/header.component";
const ViewExpensesNavigation = () => {

  return (
    <StackNavigator initialRouteName={"VIEW_EXPENSES_SCREEN"} screenOptions={{
      headerShown: false,
    }}>
      <StackScreen name="VIEW_EXPENSES_SCREEN" component={ExpenseScreen}/>
    </StackNavigator>
  );
};

export default React.memo(ViewExpensesNavigation);
