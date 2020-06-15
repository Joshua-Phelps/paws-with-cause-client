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

const getDisplayLocations = () => {
	return fetch(`${API_ROOT}/display_locations`, {
		headers: headers(),
	}).then(res => res.json());
};

export const api = {
	animals: {
		getAnimals,
	},
	displayLocations: {
		getDisplayLocations,
	},
};
