import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

//This component is addUser data which we entred using form

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  // Add User Event handler
  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim("").length === 0 || userAge.trim("").length === 0) {
      setError({
        errTitle: "Invalid input",
        errMsg: "Please enter a valid name and age!!!!",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        errTitle: "Invalid age",
        errMsg: "Please enter a valid  age!!!!",
      });
      return;
    }
    setUserName("");
    setUserAge("");
    props.onAddUser(userName, userAge);
    // console.log(userName,userAge);
  };

  //   Get the  Username
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  //   Get the  User Age
  const userAgeHandler = (e) => {
    setUserAge(e.target.value);
    // console.log(userAge);
  };

  const errorHandler = ()=>{
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal
        errTitle={error.errTitle}
        errMsg={error.errMsg}
        errHandle={errorHandler}
      />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={userNameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="text"
            id="age"
            value={userAge}
            onChange={userAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
