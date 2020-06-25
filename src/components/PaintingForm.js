import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { api } from '../services/api';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const initialState = {};

export default function PaintingForm({ editMode, location, animals }) {
	const classes = useStyles();
	const [state, setState] = useState(initialState);

	useEffect(() => {
		if (editMode) {
			fetchPainting()
				.then(painting => {
					painting['animal'] = painting.animal.id;
					setState(painting);
				})
				.catch(err => console.log(err));
		}
	}, []);

	const fetchPainting = () => {
		let id = parseInt(location.pathname.split('/paintings/edit/')[1]);
		return api.paintings.getPaintingById(id);
	};

	const handleChange = e => {
		let name = e.target.name;
		let value = e.target.value;
		setState(prevState => ({ ...prevState, [name]: value }));
	};

	const renderAnimalItems = () => {
		return animals.map(a => {
			return (
				<MenuItem key={a.labelId} value={a.id}>
					{a.id}: {a.name} ({a.animal_type})
				</MenuItem>
			);
		});
	};

	return (
		<>
			<FormControl className={classes.formControl}>
				<InputLabel id='demo-simple-select-label'>Age</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={state.painter}
					name='painter'
					onChange={handleChange}>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
				<Select
					labelId='select-animal'
					id='simple-select-animal'
					value={state.animal}
					name='animal'
					onChange={handleChange}>
					{renderAnimalItems()}
				</Select>
			</FormControl>
		</>
	);
}
