import styles from "./mealsAvailable.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
	{
		id: "b1",
		name: "CORN & PANEER BHURJI",
		description:
			"Paneer & corn with onions, tomatoes, green chilies, coriander and homemade spices",
		price: 250,
	},
	{
		id: "b2",
		name: "JHAKAAS DESI OMELETTE ",
		description: "Sharmaji inspired desi style omelette",
		price: 235,
	},
	{
		id: "b3",
		name: "ANDA BHURJI",
		description:
			"Scrambled egg with onions, tomatoes, green chilies, coriander and homemade spices",
		price: 225,
	},
	{
		id: "b4",
		name: "ITALIAN OMELETTE",
		description:
			"Omelette, sausages, white onions, multi-grain toast, potato rosti",
		price: 275,
	},
	{
		id: "b5",
		name: "BUN MASKA CHAI",
		description:
			"Mumbai's breakfast on the go. Hot oven fresh buttered sweet bun served with our masala chai 'cutting'",
		price: 135,
	},
	{
		id: "b6",
		name: "PAO BHAJI CHEESY GRIT",
		description: "Spicy blend of vegetables & cheese served with butter pao",
		price: 275,
	},
	{
		id: "b7",
		name: "KEEMA GHOTALA WITH MASKA PAO/PARATHA",
		description:
			"Lamb mince in traditional Indian spices cooked on a heavy griddle, topped with eggs and served with traditional Mumbai buttered pao or paratha",
		price: 450,
	},
];

const MealsAvailable = () => {
	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem
			key={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
			id={meal.id}
		/>
	));

	return (
		<section className={styles.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default MealsAvailable;
