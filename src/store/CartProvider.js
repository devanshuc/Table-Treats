import { useReducer } from "react";
import CartContext from "./cart-context";

const deafultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const updatedItems = state.items.concat(action.item);
		const updatedAmount =
			state.totalAmount + action.item.price * action.item.amount;
		return {
			items: updatedItems,
			totalAmount: updatedAmount,
		};
	}
	return deafultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		deafultCartState
	);

	const addItemToHandler = (item) => {
		dispatchCartAction({ type: "ADD", item: item });
	};

	const removeItemFromHandler = (id) => {
		dispatchCartAction({ type: "REMOVE", id: id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToHandler,
		removeItem: removeItemFromHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
