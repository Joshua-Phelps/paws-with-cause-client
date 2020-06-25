import React, { useReducer, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { api } from './services/api';
import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import AnimalCardsContainer from './containers/AnimalCardsContainer';
import GalleryCardsContainer from './containers/GalleryCardsContainer';
import AnimalShowPage from './components/AnimalShowPage';
import GalleryShowPage from './components/GalleryShowPage';
import { animalsReducer, galleriesReducer } from './reducers/Reducers';
import AnimalCard from './components/AnimalCard';

export const StateContext = createContext();
export const DispatchContext = createContext();

function App() {
	const [animals, animalsDispatch] = useReducer(animalsReducer, []);
	const [galleries, galleriesDispatch] = useReducer(galleriesReducer, []);

	const state = { animals, galleries };

	useEffect(() => {
		// const token = localStorage.getItem("token");
		// if (token) {
		// setLoading(true)
		// api.animals
		// 	.getAnimals()
		// 	.then(animals => {
		// 		animalsDispatch({ type: 'SET_ANIMALS', payload: animals });
		// 	})
		// 	.catch(error => console.log(error));
		api.galleries.getGalleries().then(galleries =>
			galleriesDispatch({
				type: 'SET_GALLERIES',
				payload: galleries,
			})
		);
		// }
	}, []);

	// const animalsByDisplayLocation = dispLocId => {
	// 	return animals.filter(a => a.current_display_location_id === dispLocId);
	// };

	return (
		<Router>
			<StateContext.Provider value={state}>
				<Route path='/' render={props => <NavBar {...props} />} />
				<Route path='/home' render={props => <HomePage {...props} />} />
				<Route
					path='/animals'
					exact
					render={props => (
						<AnimalCardsContainer animals={animals} {...props} />
					)}
				/>
				<Route
					path='/galleries'
					exact
					render={props => (
						<GalleryCardsContainer galleries={galleries} {...props} />
					)}
				/>
				<Route
					path='/galleries/:id'
					exact
					render={props => <GalleryShowPage {...props} />}
				/>
				<Route
					path='/animals/:id'
					exact
					render={props => <AnimalShowPage {...props} />}
				/>
			</StateContext.Provider>
		</Router>
	);
}

export default App;
