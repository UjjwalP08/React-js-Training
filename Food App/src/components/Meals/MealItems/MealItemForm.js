import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

// this file passes props to Input.js file and input prop contain an object

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "Number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add Item</button>
    </form>
  );
};

export default MealItemForm;
