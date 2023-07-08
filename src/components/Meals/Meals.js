import { Fragment } from "react";
import MealDescription from "./MealDescription";
import MealsAvailable from "./MealsAvailable";

const Meals = () => {
	return (
		<Fragment>
			<MealDescription />
			<MealsAvailable />
		</Fragment>
	);
};

export default Meals;
