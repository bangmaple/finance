import React from 'react';
import {StackNavigator, StackScreen} from "../../utils";

const AuthenticationNavigation = () => {
  return (
    <StackNavigator>
      <StackScreen name={"1"}/>
    </StackNavigator>
  )
}

export default React.memo(AuthenticationNavigation);
