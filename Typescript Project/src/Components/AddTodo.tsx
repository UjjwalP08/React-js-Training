import { arch } from "os";
import React from "react";

const submitHandler = (event:React.FormEvent) =>{
    event.preventDefault();
}

const AddTodo = () => {
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Add Todo Text</label>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default AddTodo;
