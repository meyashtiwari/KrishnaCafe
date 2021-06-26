const Reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cart: state.cart.concat(action.payload),
			};
		case "REMOVE_FROM_CART":
			let index = state.cart.indexOf(action.payload);
			let items = state.cart;
			items.splice(index, 1);
			return {
				...state,
				cart: items,
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
