import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isSpinnerLoading: false
  },
  reducers: {
    toggleSpinnerOn(state, {payload}) {
      state.isSpinnerLoading = true;
    },
    toggleSpinnerOff(state, {payload}) {
      state.isSpinnerLoading = false;
    }
  }
});

export const appReducer = appSlice.reducer;
