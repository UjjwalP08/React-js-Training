import React, { useState } from "react";
import ExpanseForm from "./ExpanseForm";

import "./NewExpanse.css";

function NewExpanse(props) {
  const [close, setClose] = useState(false);

  const SaveExpanseData = (getData) => {
    const expanseData = {
      ...getData,
      id: Math.random().toString(),
    };

    // console.log(expanseData);
    props.onExpanseHandler(expanseData);
    setClose(false)
  };

  const ExpanseHandler = () => {
    setClose(true);
  };

  const closeHandler = () => {
    setClose(false);
  };

  return (
    <div className="new-expense">
      {!close && <button onClick={ExpanseHandler}>Add New Expanse</button>}

      {close && (
        <ExpanseForm
          onSaveExpanseData={SaveExpanseData}
          onCancle={closeHandler}
        />
      )}
    </div>
  );
}

export default NewExpanse;
