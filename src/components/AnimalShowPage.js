import React, { useState, useEffect } from 'react';
import { api } from '../services/api';

export default function AnimalShowPage({ history, location }) {
	const [animal, setAnimal] = useState({});
	const [update, setUpdate] = useState(false);

	useEffect(() => {
		let id = parseInt(location.pathname.split('/animals/')[1]);
		api.animals
			.getAnimalById(id)
			.then(ani => setAnimal(ani))
			.catch(err => console.log(err));
	}, [update]);

	return <>{animal.name}</>;
}
