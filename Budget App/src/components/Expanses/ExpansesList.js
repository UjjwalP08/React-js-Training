import React from "react";
import ExpasnseItem from "./ExpasnseItem";

import "./ExpansesList.css";

const ExpansesList = (props) => {
  if (props.yearFliter.length === 0) {
    return <h2 className="expenses-list__fallback">No data Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.yearFliter.map((expanse) => (
        <ExpasnseItem
          key={expanse.id}
          title={expanse.title}
          price={expanse.price}
          date={expanse.date}
        />
      ))}
    </ul>
  );
};

export default ExpansesList;
