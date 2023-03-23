import { createSlice } from "@reduxjs/toolkit";
import { uiAction } from "./ui-slice";

const initialState = {
  items: [],
  totalQunatity: 0,
  // totalprice:0
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

// Action Creator to send data
export const sendCartData = (cartObj) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Data is Sending...",
      })
    );
    const sendData = async () => {
      const resoponse = await fetch(
        "https://shop-cart-de354-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartObj),
        }
      );

      if (!resoponse.ok) {
        throw new Error("Something went Wrong....");
      }
    };

    try {
      await sendData();

      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success...",
          message: "Data is sent successfully...",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Erro...",
          message: "Something went wrong...",
        })
      );
    }
  };
};

export default cartSlcie;
