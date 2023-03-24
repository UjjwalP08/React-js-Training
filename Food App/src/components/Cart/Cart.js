import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import cartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);
  const totalAmount = `Rs.${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const addHandler = (item)=>{}

  const removeHandler = (id)=>{}

  const cartItem = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={addHandler.bind(null,item)}
            onRemove={removeHandler(null,item.id)}
          />
        );
      })}
    </ul>
  );
  return (
    // pass oncloseCart as prop name onHideCart
    <Modal onHideCart={props.onCloseCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
