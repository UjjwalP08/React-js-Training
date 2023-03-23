import MealItemForm from "./MealItemForm";
import classes from "./MealItems.module.css";

// This file accept props through the AvailableMeal.js file

const MealItems = (props) => {
  const price = `Rs.${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name} </h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        {/* Form  */}
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItems;
