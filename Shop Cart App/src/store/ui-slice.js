import { createSlice } from "@reduxjs/toolkit";
// use for the cart button when use toggle the button ,button will hide or show

const initialState = {
  isCartVisible: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
