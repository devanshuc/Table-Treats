import CartContext from "./cart-context";

const CartProvider = (props) => {
	const addItemToHandler = (item) => {};

	const removeItemFromHandler = (item) => {};

	const cartContext = {
		items: [],
		totalAmount: 0,
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
