import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import cartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

const Cart = (props) => {
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [stillSubmiting, setStillSubmiting] = useState(false);
  const [completeSubmiting, setCompleteSubmiting] = useState(false);

  const cartCtx = useContext(cartContext);
  const totalAmount = `Rs.${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const addHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const showForm = () => {
    setIsCheckOut(true);
  };

  const submitUserDetais = async (userDataObj) => {
    setStillSubmiting(true);
    await fetch(
      "https://food-app-be1c4-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          info: userDataObj,
          items: cartCtx.items,
        }),
      }
    );
    setStillSubmiting(false);
    setCompleteSubmiting(true);
    cartCtx.clearCart();
  };

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={addHandler.bind(null, item)}
            onRemove={removeHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  const modalAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onCloseCart}>
        Close
      </button>
      {hasItem && (
        <button className={classes.button} onClick={showForm}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckOut && (
        <CheckoutForm
          onAddDetails={submitUserDetais}
          onHide={props.onCloseCart}
        />
      )}
      {!isCheckOut && modalAction}
    </>
  );

  const stillSubmitingContent = <p>Sending Your Order....</p>;

  const completeSubmitingContent = (
    <>
      <p>Data Sent Successfully...</p>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
      </div>
    </>
  );

  return (
    // pass oncloseCart as prop name onHideCart
    <Modal onHideCart={props.onCloseCart}>
      {!stillSubmiting && !completeSubmiting && cartModalContent}
      {stillSubmiting && stillSubmitingContent}
      {!stillSubmiting && completeSubmiting && completeSubmitingContent}
    </Modal>
  );
};

export default Cart;
