import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItem = (
    <ul>
      {[
        {
          id: "m1",
          name: "Sushi",
          description: "Finest fish and veggies",
          price: 220.99,
        },
      ].map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
  return (
    // pass oncloseCart as prop name onHideCart
    <Modal onHideCart={props.onCloseCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>293.45</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button}>Order</button>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
