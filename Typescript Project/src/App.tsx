import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";
import Todos from "./Components/models/todos";

const TODO_DATA = [
  new Todos('Learn React'),
  new Todos('Learn React with typescript'),
  new Todos('Learn React with java-script'),]

function App() {
  const addHandler = (text:string) =>{

  }
  return (
    <div >
      <AddTodo onAdd={addHandler}/>
      <Todo items={TODO_DATA} />
    </div>
  );
}

export default App;
