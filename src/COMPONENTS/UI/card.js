import React from "react";
import cardClasses from "./card.module.css";
const Card = function (props) {
  const classes = cardClasses.card + " " + props.className;
  return <div className={classes}>{props.children}</div>;
};
export default Card;
