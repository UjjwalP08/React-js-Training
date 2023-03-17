import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.errHandle}>
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.errTitle}</h2>
      </header>
      <div>
        <p>{props.errMsg}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.errHandle}>Okay</Button>
      </footer>
    </Card>
    </div>
  );
};

export default ErrorModal;
