import { useState } from "react";
import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";
import Todos from "./Components/models/todos";

const TODO_DATA = [
  new Todos('Learn React'),
  new Todos('Learn React with typescript'),
  new Todos('Learn React with java-script'),]

function App() {
  const [todoData, setTodoData] = useState<Todos []>([])

  const addHandler = (text:string) =>{
    const newTodo = new Todos(text);

    setTodoData((prevState)=>{
      return prevState.concat(newTodo);
    })

  }
  return (
    <div >
      <AddTodo onAdd={addHandler}/>
      <Todo items={todoData} />
    </div>
  );
}

export default App;
