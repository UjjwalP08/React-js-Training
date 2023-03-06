import Expanses from "./components/Expanses/Expanses";

const App = () => {
  const details = [
    {
      id: "a0",
      heading: "Bike Insurance",
      price: 1500,
      date: new Date(2021, 2, 30),
    },
    {
      id: "a1",
      heading: "Car Insurance",
      price: 2000,
      date: new Date(2020, 1, 3),
    },
    {
      id: "a2",
      heading: "Life Insurance",
      price: 20000,
      date: new Date(2022, 4, 3),
    },
    {
      id: "a3",
      heading: "Term Insurance",
      price: 2000000,
      date: new Date(2023, 6, 8),
    },
  ];
  return (
    <div>
      <Expanses item={details}/>
      
    </div>
  );
}

export default App;
