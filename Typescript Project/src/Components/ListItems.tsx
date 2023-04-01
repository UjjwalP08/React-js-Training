import React from "react";

const ListItems: React.FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};

export default ListItems;
