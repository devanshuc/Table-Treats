import { Fragment } from "react";
import HeaderButton from "./HeaderButton";
import styles from "./Header.module.css";
import mealImage from "../../assets/meal.jpg";

const Header = (props) => {
	return (
		<Fragment>
			<header className={styles.header}>
				<h1>Table Treats</h1>
				<HeaderButton />
			</header>
			<div className={styles["main-image"]}>
				<img src={mealImage} alt="Some food" />
			</div>
		</Fragment>
	);
};

export default Header;
