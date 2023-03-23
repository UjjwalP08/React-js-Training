import Card from "../UI/Card";
import classes from "./AvailableMeal.module.css";
import MealItems from "./MealItems/MealItems";

// in this file we have dummy data that we render in our Webpage
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 220.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 260.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 130.09,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 180.99,
  },
];

const AvailableMeal = () => {
// we can Wrap the meallist using MealItem componet where we pass our props
  const mealList = DUMMY_MEALS.map((meal) => {
    return <MealItems key={meal.id} description={meal.description} name={meal.name} price={meal.price} />;
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeal;
