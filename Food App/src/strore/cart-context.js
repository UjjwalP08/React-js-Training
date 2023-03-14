// This file is help to store the data that we going to add in the cart

import React, { createContext } from "react";

const CartContext = createContext({

    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    deleteItem:(id)=>{}

});

export default CartContext;