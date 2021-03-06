import { useContext } from "react";
import CartContext from "../../STORE/cart-context";
import classes from "./cart.module.css";
import Modal from "./modal";
import CartItem from "./CartItem";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";
// import { useContext } from "react";
// import CartContext from "../../STORE/cart-context";

const Cart = function (props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.total.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const addItemHandler = function (item) {
    // console.log(item);
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeItemHandler = function (id) {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.item.id}
          price={item.item.price}
          name={item.item.name}
          amount={item.item.amount}
          onAddItem={addItemHandler.bind(null, item.item)}
          onRemoveItem={removeItemHandler.bind(null, item.item.id)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {/* rendering cart items */}
      {cartItems}
      {/* cart summary */}
      <div className={classes.total}>
        <span>Total</span>
        <span>{totalAmount}</span>
      </div>
      {/* cart actions */}
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
