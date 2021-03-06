const API_ROOT = 'http://localhost:3000';

const token = () => localStorage.getItem('token');

const headers = () => {
	return {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		Authorization: token(),
	};
};

const getAnimals = () => {
	return fetch(`${API_ROOT}/animals`, {
		headers: headers(),
	}).then(res => res.json());
};

const getAnimalById = id => {
	return fetch(`${API_ROOT}/animals/${id}`, {
		headers: headers(),
	}).then(res => res.json());
};

const getGalleries = () => {
	return fetch(`${API_ROOT}/galleries`, {
		headers: headers(),
	}).then(res => res.json());
};

const getGalleryById = id => {
	return fetch(`${API_ROOT}/galleries/${id}`, {
		headers: headers(),
	}).then(res => res.json());
};

const getPaintLocs = () => {
	return fetch(`${API_ROOT}/paint_locations`, {
		headers: headers(),
	}).then(res => res.json());
};

const getPaintLocById = id => {
	return fetch(`${API_ROOT}/paint_locations/${id}`, {
		headers: headers(),
	}).then(res => res.json());
};

const getPaintingById = id => {
	return fetch(`${API_ROOT}/paintings/${id}`, {
		headers: headers(),
	}).then(res => res.json());
};

const getShelters = () => {
	return fetch(`${API_ROOT}/shelters`, {
		headers: headers(),
	}).then(res => res.json());
};

const getShelterById = id => {
	return fetch(`${API_ROOT}/shelters/${id}`, {
		headers: headers(),
	}).then(res => res.json());
};

export const api = {
	animals: {
		getAnimals,
		getAnimalById,
	},
	galleries: {
		getGalleries,
		getGalleryById,
	},
	paintLocs: {
		getPaintLocs,
		getPaintLocById,
	},
	paintings: {
		getPaintingById,
	},
	shelters: {
		getShelters,
		getShelterById,
	},
};
