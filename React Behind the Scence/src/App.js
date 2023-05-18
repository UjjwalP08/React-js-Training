import React, { useCallback, useState } from "react";

import "./App.css";
import Demo from "./components/Demo/Demo";
import Button from "./components/UI/Button/Button";

function App() {
  const [output, setOutput] = useState(false);

  // console.log("Above the clickHandler");

  const clickHandler = useCallback(() => {
    console.log("useCallback execute");
    setOutput((prevOutput) => {
      return !prevOutput;
    });
  }, []);
  console.log("App file");
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo />
      <Button onClick={clickHandler}> Click here </Button>
    </div>
  );
}

export default App;
