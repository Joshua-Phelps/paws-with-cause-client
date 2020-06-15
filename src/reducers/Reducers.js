const SET_ANIMALS = 'SET_ANIMALS';
const SET_DISPLAY_LOCATIONS = 'SET_DISPLAY_LOCATIONS';

const animalsReducer = (state, action) => {
	switch (action.type) {
		case SET_ANIMALS:
			return [...action.payload];
		default:
			return state;
	}
};

const displayLocationsReducer = (state, action) => {
	switch (action.type) {
		case SET_DISPLAY_LOCATIONS:
			return [...action.payload];
		default:
			return state;
	}
};

export { animalsReducer, displayLocationsReducer };
