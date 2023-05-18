import React from "react";
import Wrapper from "./Wrapper";

const Demo = (props) => {
    console.log("Demo file");
  return <Wrapper>{props.show ? "Hello there!!!!" : ""}</Wrapper>;
};

export default React.memo(Demo);
