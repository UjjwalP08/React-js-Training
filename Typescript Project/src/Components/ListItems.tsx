import React from "react";
import Todos from "./models/todos";

const ListItems: React.FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};

export default ListItems;
