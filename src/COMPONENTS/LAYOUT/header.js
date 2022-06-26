import React, { useState, Fragment, useContext } from "react";
import mealsImage from "../../assets/meals.jpg";
import CartButton from "./cartButton";
import headerStyles from "./header.module.css";
import CartContext from "../../STORE/cart-context";

const Header = (props) => {
  return (
    <Fragment>
      <header className={headerStyles.header}>
        <span>Foody</span>
        <CartButton onClick={props.onShowCart}></CartButton>
      </header>
      <div className={headerStyles.main_image}>
        <img src={mealsImage} alt="meals image"></img>
      </div>
    </Fragment>
  );
};
export default Header;
