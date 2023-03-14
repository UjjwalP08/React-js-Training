import React, { useReducer } from "react";
import CartContext from "./cart-context";

// use this component to wrapping the other components so we can use the useContext hook

const defaultCartItem = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.items);
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  return defaultCartItem;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartItem);

  const addIteminCart = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const delteIteminCart = (id) => {
    dispatchCart({ type: "Remove", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addIteminCart,
    deleteItem: delteIteminCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
