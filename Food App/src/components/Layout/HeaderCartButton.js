import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../strore/cart-context";

// import CSS File
import classes from "./HeaderCartButton.module.css";

// This component manage the Cart button which is inside the Header.js file

const HeaderCartButton = (props) => {
  const cartObj = useContext(CartContext);

  const noOfCartItem = cartObj.items.reduce((currItemNo, item) => {
    return currItemNo + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {noOfCartItem} </span>
    </button>
  );
};

export default HeaderCartButton;
