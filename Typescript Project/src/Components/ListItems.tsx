import React from "react";
import classes from "./ListItems.module.css";
const ListItems: React.FC<{ text: string }> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};

export default ListItems;
