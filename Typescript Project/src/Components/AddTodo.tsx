import React, { useRef } from "react";
import classes from './AddTodo.module.css';

const AddTodo : React.FC<{onAdd: (text:string)=> void }> = (props) => {
  const inputText = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enterText = inputText.current!.value;

    if (enterText?.trim().length === 0) {
      // throw an error
      return;
    }

    // add todo and show it
    props.onAdd(enterText)

  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Add Todo Text</label>
      <input type="text" id="text" ref={inputText} />
      <button>Add Todo</button>
    </form>
  );
};

export default AddTodo;
