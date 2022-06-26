import classes from "./mealItemForm.module.css";
import Input from "../UI/input";
import { text } from "@fortawesome/fontawesome-svg-core";
import { useRef } from "react";

const MealItemForm = function (props) {
  const enteredAmountRef = useRef();
  const formSubmitHandler = function (event) {
    event.preventDefault();
    const enteredAmount = enteredAmountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    // console.log(enteredAmountNumber);
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        ref={enteredAmountRef}
        label={"Amount"}
        attributes={{
          type: "number",
          min: 1,
          max: 5,
          defaultValue: 1,
          id: props.id,
          step: 1,
        }}
      ></Input>
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealItemForm;
