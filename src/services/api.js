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

export const api = {
	animals: {
		getAnimals,
		getAnimalById,
	},
	galleries: {
		getGalleries,
		getGalleryById,
	},
};
