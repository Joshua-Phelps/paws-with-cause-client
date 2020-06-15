import React, { useReducer, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { api } from './services/api';
import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import AnimalLibrary from './components/AnimalLibrary';
import DisplayLocationsLibrary from './components/DisplayLocationsLibrary';
import { animalsReducer, displayLocationsReducer } from './reducers/Reducers';

export const StateContext = createContext();

function App() {
	const [animals, AnimalsDispatch] = useReducer(animalsReducer, []);
	const [displayLocations, DisplayLocationsDispatch] = useReducer(
		displayLocationsReducer,
		[]
	);

	const state = { animals, displayLocations };

	useEffect(() => {
		// const token = localStorage.getItem("token");
		// if (token) {
		// setLoading(true)
		api.animals
			.getAnimals()
			.then(animals => {
				AnimalsDispatch({ type: 'SET_ANIMALS', payload: animals });
			})
			.catch(error => console.log(error));
		api.displayLocations.getDisplayLocations().then(locations =>
			DisplayLocationsDispatch({
				type: 'SET_DISPLAY_LOCATIONS',
				payload: locations,
			})
		);
		// }
	}, []);

	return (
		<Router>
			<StateContext.Provider value={state}>
				<Route path='/' render={props => <NavBar {...props} />} />
				<Route path='/home' render={props => <HomePage {...props} />} />
				<Route path='/animals' render={props => <AnimalLibrary {...props} />} />
				<Route
					path='/display-locations'
					render={props => <DisplayLocationsLibrary {...props} />}
				/>
			</StateContext.Provider>
		</Router>
	);
}

export default App;
