import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef,useState } from "react";

// this file passes props to Input.js file and input prop contain an object

const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true)
  const amountRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();

    const enterAmount = amountRef.current.value;
    const latestAmount = +enterAmount;

    if(enterAmount.trim().length === 0 || latestAmount < 1 || latestAmount > 5 )
    {
      setAmountValid(false);
      return;
    }

    props.onAddtoCart(latestAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add Item</button>
      {!amountValid && <p>Enter Valid Amount between 1-5...</p> }
    </form>
  );
};

export default MealItemForm;
