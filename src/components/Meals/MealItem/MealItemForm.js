import { useRef } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";
const MealItemForm = (props) => {
	const amountInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();
	};

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: "amount_" + props.id, // this changed!
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>

			<button>+ Add</button>
		</form>
	);
};

export default MealItemForm;
