const Reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			var id = action.payload;
			var count = 1;
			if (state.cart.has(id)) {
				count += state.cart.get(id);
			}
			return {
				...state,
				cart: state.cart.set(id, count),
			};
		case "REMOVE_FROM_CART":
			id = action.payload;
			count = state.cart.get(id);
			return {
				...state,
				cart: state.cart.set(id, count - 1),
			};
		case "DELETE_FROM_CART":
			id = action.payload;
			return {
				...state,
				cart: state.cart.set(id, 0),
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
