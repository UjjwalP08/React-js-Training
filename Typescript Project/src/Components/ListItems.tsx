import React from "react";
import classes from "./ListItems.module.css";
const ListItems: React.FC<{ text: string;onRemoveTodo:()=>void }> = (props) => {
    
  return <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>;
};

export default ListItems;
