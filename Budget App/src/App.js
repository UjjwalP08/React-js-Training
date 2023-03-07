import React, { useState } from "react";
import Expanses from "./components/Expanses/Expanses";
import NewExpanse from "./components/NewExpanse/NewExpanse";

const DUMMY_DATA = [
  {
    id: "a0",
    title: "Bike Insurance",
    price: 1500,
    date: new Date(2021, 2, 30),
  },
  {
    id: "a1",
    title: "Car Insurance",
    price: 2000,
    date: new Date(2020, 1, 3),
  },
  {
    id: "a2",
    title: "Life Insurance",
    price: 20000,
    date: new Date(2022, 4, 3),
  },
  {
    id: "a4",
    title: "Game Console",
    price: 30000,
    date: new Date(2023, 4, 1),
  },
  {
    id: "a3",
    title: "Term Insurance",
    price: 200000,
    date: new Date(2023, 6, 8),
  },
];

const App = () => {
  const [details, setDetails] = useState(DUMMY_DATA);

  const expanseHandler = (expanse) => {
    // console.log("In App.js");
    // console.log(expanse);
    setDetails((prevDetails) => {
      return [expanse, ...prevDetails];
    });
  };
  return (
    <div>
      <NewExpanse onExpanseHandler={expanseHandler} />
      <Expanses item={details} />
    </div>
  );
};

export default App;
