const initialState = {
	counter: 200,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'ADD2':
			return {
				counter: state.counter + action.payload,
			};
		default:
			return state;
	}
};
