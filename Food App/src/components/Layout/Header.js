import React from "react";

import HeaderCartButton from "./HeaderCartButton";

// CSS File
import classes from "./Header.module.css";

// import img
import imgsrc from "../../assets/meals.jpg";

// .js File that manage the Header Componet
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h2>TST Meals</h2>
        <HeaderCartButton onCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={imgsrc} alt="TST Healthy Meals" />
      </div>
    </>
  );
};

export default Header;
