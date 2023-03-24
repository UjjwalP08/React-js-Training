import cartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";
import { useContext } from "react";

const HeaderButton = (props) => {
  const cartCtx = useContext(cartContext);
  // when we add the item in the cart more than one time we need to show it
  const numberOfItem = cartCtx.items.reduce((curNum,item)=>{
    return curNum + item.amount;
  },0)
  return (
    // onViewCart is props that we recieve through the app.js file
    <button className={classes.button} onClick={props.onViewCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItem}</span>
    </button>
  );
};

export default HeaderButton;
