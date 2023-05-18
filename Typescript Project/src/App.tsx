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
  const removeHandler = (todoId:string)=>{

        setTodoData(prevState => prevState.filter(todo => todo.id !== todoId))

  }
  return (
    <div >
      <AddTodo onAdd={addHandler}/>
      <Todo items={todoData} onDeletTodo={removeHandler} />
    </div>
  );
}

export default App;
