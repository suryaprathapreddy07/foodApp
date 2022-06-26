import { Fragment } from "react";
import classes from "./input.module.css";
import { forwardRef } from "react";

const Input = forwardRef(function (props, ref) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.attributes.id}>{props.label}</label>
      <input id={props.attributes.id} ref={ref} {...props.attributes}></input>
    </div>
  );
});

export default Input;
