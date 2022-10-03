import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import {appReducer} from "./slices/app";
import {userReducer} from "./slices/user";

const combinedReducer = combineReducers({
  app: appReducer,
  user: userReducer,
});
const reducer = (state, action) => {
  return combinedReducer(state, action);
};

const makeStore = () => {
  return configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false

    }),
  });
};

export default makeStore;
