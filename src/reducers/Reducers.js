const SET_ANIMALS = 'SET_ANIMALS';
const SET_GALLERIES = 'SET_GALLERIES';
const SET_GALLERY = 'SET_GALLERY';
const SET_PAINT_LOCS = 'SET_PAINT_LOCS';
const SET_PAINT_LOCATION = 'SET_PAINT_LOCATION';

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
	switch (action.type) {
		case SET_GALLERY:
			return { ...action.payload };
		default:
			return state;
	}
};

const paintLocsReducer = (state, action) => {
	switch (action.type) {
		case SET_PAINT_LOCS:
			return [...action.payload];
		default:
			return state;
	}
};

const paintLocationReducer = (state, action) => {
	switch (action.type) {
		case SET_PAINT_LOCATION:
			return { ...action.payload };
		default:
			return state;
	}
};

export {
	animalsReducer,
	galleriesReducer,
	galleryReducer,
	paintLocsReducer,
	paintLocationReducer,
};
