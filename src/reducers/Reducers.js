const SET_ANIMALS = 'SET_ANIMALS';
const SET_GALLERIES = 'SET_GALLERIES';
const SET_GALLERY = 'SET_GALLERY';

const animalsReducer = (state, action) => {
	switch (action.type) {
		case SET_ANIMALS:
			return [...action.payload];
		default:
			return state;
	}
};

const galleriesReducer = (state, action) => {
	switch (action.type) {
		case SET_GALLERIES:
			return [...action.payload];
		default:
			return state;
	}
};

const galleryReducer = (state, action) => {
	console.log(action.payload);
	switch (action.type) {
		case SET_GALLERY:
			return { ...action.payload };
		default:
			return state;
	}
};

export { animalsReducer, galleriesReducer, galleryReducer };
