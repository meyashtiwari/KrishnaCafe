const Reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cart: state.cart.concat(action.payload),
			};
		case "REMOVE_FROM_CART":
			return {
				...state,
				cart: state.cart.filter((cart) => cart.id !== action.payload),
			};
		case "SET_ERROR":
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default Reducer;
