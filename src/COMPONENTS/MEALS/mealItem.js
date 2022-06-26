import classes from "./mealItem.module.css";
import Card from "../UI/card";
import MealItemForm from "./mealItemForm";
import { useContext } from "react";
import CartContext from "../../STORE/cart-context";

const MealItem = function (props) {
  const cartctx = useContext(CartContext);
  const addtoCartHandler = function (amount) {
    // console.log(amount);
    cartctx.addItem({
      amount: amount,
      price: props.meal.price,
      name: props.meal.name,
      id: props.id,
    });
  };
  return (
    <div className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{props.meal.price}</div>
      </div>
      <div>
        <MealItemForm
          id={props.meal.id}
          onAddToCart={addtoCartHandler}
        ></MealItemForm>
      </div>
    </div>
  );
};

export default MealItem;
