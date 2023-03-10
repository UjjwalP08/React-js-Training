import React, { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

//This component is addUser data which we entred using form

const AddUser = (props) => {
  const [error, setError] = useState();
  const uName = useRef();
  const uAge = useRef();

  // Add User Event handler
  const addUserHandler = (event) => {
    event.preventDefault();
    // Using ref in react
    const UserName = uName.current.value;
    const UserAge = uAge.current.value;
    if (UserName.trim("").length === 0 || UserAge.trim("").length === 0) {
      setError({
        errTitle: "Invalid input",
        errMsg: "Please enter a valid name and age!!!!",
      });
      return;
    }
    if (+UserAge < 1) {
      setError({
        errTitle: "Invalid age",
        errMsg: "Please enter a valid  age!!!!",
      });
      return;
    }

    props.onAddUser(UserName, UserAge);
    uName.current.value = "";
    uAge.current.value = "";
    // setUserName("");
    // setUserAge("");
    // console.log(userName,userAge);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          errTitle={error.errTitle}
          errMsg={error.errMsg}
          errHandle={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={uName} />
          <label htmlFor="age">Age (Years)</label>
          <input type="text" id="age" ref={uAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
