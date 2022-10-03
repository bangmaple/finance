import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isSpinnerLoading: false,
    isGenericModalShown: false,
    alertModalMessage: undefined,
  },
  reducers: {
    toggleSpinnerOn(state) {
      state.isSpinnerLoading = true;
    },
    toggleSpinnerOff(state) {
      state.isSpinnerLoading = false;
    },
    toggleGenericAlertModalOn(state) {
      state.isGenericModalShown = true;
    },
    toggleGenericAlertModalOff(state) {
      state.isGenericModalShown = false;
    },
    setAlertModalMessage(state, {payload}) {
      state.alertModalMessage = payload;
    }
  }
});

export const appReducer = appSlice.reducer;

export const {
  toggleSpinnerOn,
  toggleSpinnerOff,
  toggleGenericAlertModalOff,
  toggleGenericAlertModalOn,
  setAlertModalMessage
} = appSlice.actions;