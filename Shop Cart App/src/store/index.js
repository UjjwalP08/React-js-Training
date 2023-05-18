import { configureStore } from "@reduxjs/toolkit";
import cartSlcie from "./cart-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    uiReducer: uiSlice.reducer,
    cartReducer:cartSlcie.reducer
  },
});

export default store;
