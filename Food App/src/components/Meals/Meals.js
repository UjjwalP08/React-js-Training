import AvailableMeal from './AvailableMeal';
import MealsSummary from './MealSummary';

// in this file we render our meal list
const Meals = (props)=>{
    return(
        <>
        <MealsSummary />
        <AvailableMeal/>
        </>
    );
};


export default Meals;