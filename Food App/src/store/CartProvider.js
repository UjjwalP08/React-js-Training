import React,{useReducer} from "react";
import cartContext from "./cart-context";

const initalCart = {
    items:[],
    totalAmount:0
}

const cartReducer = (state,action)=>{

    if(action.type === 'ADD')
    {
        const updatedItems = state.items.concat(action.item);
        const updatedAmount = state.totalAmount + action.item.price*action.item.amount

        return {
            items:updatedItems,
            totalAmount:updatedAmount
        }

    }

    return initalCart;
}

const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, initalCart)

  const addItemHandler = (item) => {
    dispatchCart({type:'ADD',item:item})
  };
  const removeItemHandler = (id) => {
    dispatchCart({type:'REMOVE',id:id})
  };

  const cartInitalContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return <cartContext.Provider value={cartInitalContext}>{props.children}</cartContext.Provider>;
};

export default CartProvider;
