import React, { useContext } from 'react';
import { StateContext } from '../App';
import AnimalCard from './AnimalCard';
import { Grid } from '@material-ui/core';

export default function AnimalLibrary() {
	const { animals } = useContext(StateContext);

	const renderAnimals = () => {
		return animals.map(animal => {
			return (
				<Grid key={animal.id} item xs={3}>
					<AnimalCard animal={animal} />
				</Grid>
			);
		});
	};

	return (
		<>
			<Grid container spacing={3}>
				{renderAnimals()}
			</Grid>
		</>
	);
}
