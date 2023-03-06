import Expanses from "./components/Expanses/Expanses";
import NewExpanse from "./components/NewExpanse/NewExpanse";

const App = () => {
  const details = [
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
      id: "a3",
      title: "Term Insurance",
      price: 2000000,
      date: new Date(2023, 6, 8),
    },
  ];

  const expanseHandler = (expanse) =>{
    console.log("In App.js");
    console.log(expanse);
  }
  return (
    <div>
      <NewExpanse onexpanseHandler={expanseHandler} />
      <Expanses item={details}/>
      
    </div>
  );
}

export default App;
