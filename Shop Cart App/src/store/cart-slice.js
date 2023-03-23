import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQunatity: 0,
  isChange:false
};

const cartSlcie = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQunatity++;
      state.isChange = true;
      // item added for first time
      if (!existingItem) {
        state.items.push({
          name: newItem.title,
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalprice: newItem.price,
        });
      } else {
        // item already inside the cart
        existingItem.quantity++;
        existingItem.totalprice = existingItem.totalprice + newItem.price;
      }
    },
    removeToCart(state, action) {
      const id = action.payload;
      state.isChange = true;      
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQunatity--;

      // if item quntity only 1
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalprice = existingItem.totalprice - existingItem.price;
      }
    },
  },
});

export const cartAction = cartSlcie.actions;



export default cartSlcie;
