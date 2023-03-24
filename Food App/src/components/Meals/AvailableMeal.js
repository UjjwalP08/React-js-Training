import { useState, useEffect } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeal.module.css";
import MealItems from "./MealItems/MealItems";

// we not use dummy data any more now we fetch the data from firebase

const AvailableMeal = () => {
  // we can Wrap the meallist using MealItem componet where we pass our props

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // we not use async & await in useEffect main function to use async and await need to make new function inside that function

    const fetchData = async () => {
      const data = await fetch(
        "https://food-app-be1c4-default-rtdb.firebaseio.com/meals.json"
      );

      if(!data.ok)
      {
        throw new Error("Something went wrong!!!!");
      }
      const resoponse = await data.json();

      const loadMeals = [];

      for (const key in resoponse) {
        loadMeals.push({
          id: key,
          name: resoponse[key].name,
          description: resoponse[key].description,
          price: resoponse[key].price,
        });
      }
      setMeals(loadMeals);
      setIsLoading(false);
    };

    fetchData().catch((error)=>{
      setIsLoading(false);
      setError(error.message);
    });
  }, []);



  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading data....</p>
      </section>
    );
  }

  if(error){
    return (<section className={classes.error}>
      <p>{error}</p>
    </section>)
  }
  const mealList = meals.map((meal) => {
    return (
      <MealItems
        key={meal.id}
        id={meal.id}
        description={meal.description}
        name={meal.name}
        price={meal.price}
      />
    );
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
