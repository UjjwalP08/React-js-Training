import MealItemForm from "./MealItemForm";
import classes from "./MealItems.module.css";
import { useContext } from "react";
import cartContext from "../../../store/cart-context";


// This file accept props through the AvailableMeal.js file

const MealItems = (props) => {

  const cartCtx = useContext(cartContext);

  const price = `Rs.${props.price.toFixed(2)}`;

  const addToCartHandler = (amount)=>{
      cartCtx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price
      })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name} </h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        {/* Form  */}
        <MealItemForm id={props.id} onAddtoCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItems;
