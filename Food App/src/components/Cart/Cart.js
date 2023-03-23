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
      ].map((item) =>{return (
        <li>{item.name}</li>
      )})}
    </ul>
  );
  return (
    <Modal>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>293.45</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button}>Order</button>
        <button className={classes["button--alt"]}>Close</button>
      </div>
    </Modal>
  );
};

export default Cart;
