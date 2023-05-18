import React from "react";
import Todos from "./models/todos";
import ListItems from "./ListItems";
import classes from "./Todo.module.css";

const Todo: React.FC<{ items: Todos[]; onDeletTodo: (id:string) => void }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <ListItems
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onDeletTodo.bind(null,item.id)}
        />
      ))}
    </ul>
  );
};

export default Todo;
