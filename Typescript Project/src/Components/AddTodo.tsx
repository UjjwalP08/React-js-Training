import React, { useRef } from "react";

const inputText = useRef<HTMLInputElement>(null);

const submitHandler = (event:React.FormEvent) =>{
    event.preventDefault();
    const enterText = inputText.current?.value;

    if(enterText?.trim().length === 0)
    {
        // throw an error
        return;
    }

    // add todo
}

const AddTodo = () => {
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Add Todo Text</label>
      <input type="text" id="text" ref={inputText} />
      <button>Add Todo</button>
    </form>
  );
};

export default AddTodo;
