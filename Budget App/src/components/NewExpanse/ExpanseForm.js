import React, { useState } from "react";
import "./ExpanseForm.css";

function ExpanseForm(props) {
  const [enterTitle, setenterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  // use one state instead of using 3 states
  // to use this we need to pass object as agruments

  // const [userInput, setuserInput] = useState({
  //     enterTitle: '',
  //     enterAmount: '',
  //     enterDate: ''
  // });

  const getTitle = (event) => {
    setenterTitle(event.target.value);

    // here our curr state update is depend on prev state so we use below method
    // setuserInput((prevState) => {
    //     return { ...prevState, enterTitle: event.target.value };
    // })
  };
  const getAmount = (event) => {
    setEnterAmount(event.target.value);

    // here our curr state update is depend on prev state so we use below method
    // setuserInput((prevState) => {

    //     return { ...prevState, enterAmount: event.target.value };
    // })
  };
  const getDate = (event) => {
    setEnterDate(event.target.value);

    // here our curr state update is depend on prev state so we use below method
    // setuserInput((prevState) => {

    //     return { ...prevState, enterDate: event.target.value };
    // })
  };

//   Submit Button Handler
  const submitHandler = (event) => {
    event.preventDefault();

    const getData = {
      title: enterTitle,
      price: +enterAmount,
      date: new Date(enterDate),
    };

    // console.log(getData);

    props.onSaveExpanseData(getData);

    setenterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={getTitle} value={enterTitle} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={getAmount}
            value={enterAmount}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={getDate}
            value={enterDate}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expanse</button>
          <button type="button" onClick={props.onCancle} >Cancle</button>
        </div>
      </div>
    </form>
  );
}

export default ExpanseForm;
