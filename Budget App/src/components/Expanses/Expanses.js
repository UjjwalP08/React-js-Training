import React, { useState } from "react";
import Card from "../UI/Card";
import "../Expanses/Expanses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpansesList from "./ExpansesList";
import ExpanseChart from "./ExpanseChart";

const Expanses = (props) => {
  const [selectYear, setSelectYear] = useState("2023");

  const ExpansesYear = (year) => {
    setSelectYear(year);
  };

  // to show the output of only given year so use below filter function
  const filterExpanse = props.item.filter((ele) => {
    return ele.date.getFullYear().toString() === selectYear;
  });

  return (
    <>
      <Card className="expense">
        <ExpensesFilter defalutYear={selectYear} onExpanseYear={ExpansesYear} />
        <ExpanseChart expansees={filterExpanse} />
        <ExpansesList yearFliter={filterExpanse} />
      </Card>
    </>
  );
};

export default Expanses;
