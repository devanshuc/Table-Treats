import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
	const cartItems = (
		<ul className={styles["cart-items"]}>
			{[{ id: "1", name: "Icecream", amount: 3, price: 12.99 }].map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);
	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>35.76</span>
			</div>
			<div className={styles.actions}>
				<button className={styles["button--alt"]} onClick={props.onClose}>
					Close
				</button>
				<button className={styles.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
