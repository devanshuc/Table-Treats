import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
	const cartCntxt = useContext(CartContext);

	const totalAmount = `${cartCntxt.totalAmount}/-`;
	//The total amount

	const hasItems = cartCntxt.items.length > 0;
	//This checks if we have any items in the cart

	const cartItems = (
		<ul className={styles["cart-items"]}>
			{cartCntxt.items.map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);
	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={styles.total}>
				<span>Amount Payable : </span>
				<span>{totalAmount}</span>
			</div>
			<div className={styles.actions}>
				<button className={styles["button--alt"]} onClick={props.onClose}>
					Close
				</button>
				{hasItems && <button className={styles.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
