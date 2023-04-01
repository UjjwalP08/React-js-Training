import React from "react"
import Todos from "./models/todos"
import ListItems from "./ListItems"


const  Todo : React.FC <{items:Todos []}> = (props) => {
  return (
    <ul>
        {props.items.map(item => <ListItems key={item.id} text={item.text} />)}
    </ul>
  )
}

export default Todo
