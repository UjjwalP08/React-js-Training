import React, { useContext } from "react";
import CartContext from "../../strore/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `Rs.${cartCtx.totalAmount.toFixed(2)}`;
  const hasitem = cartCtx.items.length > 0;

  const cartItemAddHandler = (item)=>{
  // code here
  
  }

  const cartItemRemoveHandler = (id)=>{
  // code here
  
  }

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null,item.id)}
            onAdd={cartItemAddHandler.bind(null,item)}

          />
        );
      })}
    </ul>
  );

  return (
    <Modal onHideCart={props.onCloseCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          {" "}
          Close
        </button>
        {hasitem && <button className={classes.button}> Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
