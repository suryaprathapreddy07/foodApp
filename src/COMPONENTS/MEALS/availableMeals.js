import Card from "../UI/card";
import classes from "./availableMeals.module.css";
import MealItem from "./mealItem";
import ReactDOM from "react-dom";

// At first we work with a dummy meals. but in real world application the data is fetched from database that we will learn from further section in the course
// below is the array of dummy meals
const meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = function () {
  return (
    <Card className={classes.meals}>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <MealItem meal={meal} id={meal.id}></MealItem>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
