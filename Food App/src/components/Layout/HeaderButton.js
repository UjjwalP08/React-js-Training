import cartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";
import { useContext, useEffect, useState } from "react";

const HeaderButton = (props) => {
  const cartCtx = useContext(cartContext);
  const [btnAnimation, setBtnAnimation] = useState(false);

  // when we add the item in the cart more than one time we need to show it and here curNum value is 0
  const numberOfItem = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const btnClass = `${classes.button} ${btnAnimation ? classes.bump : ""}`;
  // use the useEffect() to show the animation when item is added in cart
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnAnimation(true);

    // stop after 300ms
    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);

    // clear time out
    return () => {
      clearTimeout(timer);
    };

    // we want to apply animation when the item is add so our array of dependenices is cartCtx.items
  }, [cartCtx.items]);
  return (
    // onViewCart is props that we recieve through the app.js file
    <button className={btnClass} onClick={props.onViewCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItem}</span>
    </button>
  );
};

export default HeaderButton;
