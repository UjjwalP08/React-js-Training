import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

// This Component help to show the data on the screen which you entred 

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul >
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} is Years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
