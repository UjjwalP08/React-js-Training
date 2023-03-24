import React from "react";
import classes from "./Header.module.css";
import imgUrl from "../assets/meals.jpg";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1> TST Meals</h1>
        <HeaderButton onViewCart={props.onShowCart} />
        {/* header.js pass onShowCart as the prop name onViewCart to HeaderButton.js file */}
      </header>
      <div className={classes['main-image']}>
        <img src={imgUrl} alt="Tasty Meal Provided by TST Technology" />
      </div>
    </>
  );
};

export default Header;
