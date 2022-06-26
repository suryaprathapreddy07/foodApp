import React, { useContext, useEffect, useState } from "react";
import cartbuttonStyles from "./cartButton.module.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../STORE/cart-context";
const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.item.amount;
  }, 0);
  // const numberOfCartItems = 10 + cartCtx.items[0].amount;
  // console.log(numberOfCartItems);
  const btnClasses = `${cartbuttonStyles.button} ${
    isButtonHighlighted ? cartbuttonStyles.bump : ""
  }`;
  const { items } = cartCtx;
  useEffect(() => {
    if (items.length == 0) {
      return;
    }
    setIsButtonHighlighted(true);
    const timer = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={cartbuttonStyles.icon}>
        <FontAwesomeIcon icon={faCartShopping} />
      </span>
      <span>Cart</span>

      <span className={cartbuttonStyles.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default CartButton;
