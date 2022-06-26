import React, { useContext } from "react";
import cartbuttonStyles from "./cartButton.module.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../STORE/cart-context";
const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.item.amount;
  }, 0);
  console.log(numberOfCartItems);
  // const numberOfCartItems = 10 + cartCtx.items[0].amount;
  // console.log(numberOfCartItems);
  return (
    <button className={cartbuttonStyles.button} onClick={props.onClick}>
      <span className={cartbuttonStyles.icon}>
        <FontAwesomeIcon icon={faCartShopping} />
      </span>
      <span>Cart</span>

      <span className={cartbuttonStyles.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default CartButton;
