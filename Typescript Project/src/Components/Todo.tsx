import React from "react"
import Todos from "./models/todos"


const  Todo : React.FC <{items:Todos []}> = (props) => {
  return (
    <ul>
        {props.items.map(item => <li key={item.id}>{item.text}</li>)}
    </ul>
  )
}

export default Todo
