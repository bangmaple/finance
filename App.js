import React from 'react';
import {Provider} from "react-redux";
import makeStore from "./redux/store";
import AppNavigation from "./navigation/app.navigation";

const App = () => {

  return (
    <Provider store={makeStore()}>
      <AppNavigation/>
    </Provider>
    );
};

export default App;
