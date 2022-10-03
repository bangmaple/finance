import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
      authenticatedUser: undefined
    },
    reducers: {
        setAuthenticatedUser: (state, {payload}) => {
            state.authenticatedUser = payload;
        }
    },

});

export const userReducer = userSlice.reducer;

export const {setAuthenticatedUser} = userSlice.actions;