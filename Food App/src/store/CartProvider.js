import React, { useReducer } from "react";
import cartContext from "./cart-context";

const initalCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existItem = state.items[existItemIndex];
    let updatedItems;

    if (existItem) {
      // item already exist
      const updatedItem = {
        ...existItem,
        amount: existItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existItemIndex] = updatedItem;
    } else {
      // item added for 1st time
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existItem = state.items[existItemIndex];
    const updatedAmount = state.totalAmount - existItem.price;
    let upadateItems;
    if (existItem.amount === 1) {
      upadateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const upadateItem = {...existItem,amount:existItem.amount - 1};
      upadateItems = [...state.items];
      upadateItems[existItemIndex] = upadateItem;
    }
    return {
      items:upadateItems,
      totalAmount:updatedAmount
    }
  }

  return initalCart;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initalCart);

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const cartInitalContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <cartContext.Provider value={cartInitalContext}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
