import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountRef = useRef();
  const [amounIsValid, setAmounIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    const enterAmount = amountRef.current.value;
    const amountNumber = +enterAmount;

    if (
      enterAmount.trim().length === 0 ||
      amountNumber < 1 ||
      amountNumber > 5
    ) {
      setAmounIsValid(false);
      return;
    }

    props.onAddtoCart(amountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "Number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.button}>Add Item</button>
      {!amounIsValid && <p>Please enter valid amount.</p>}
    </form>
  );
};

export default MealItemForm;
