import React, { Fragment } from "react";
import AvailableMeals from "./availableMeals";
import MealsSummary from "./mealsSummary";

const Meals = function () {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </Fragment>
  );
};

export default Meals;
