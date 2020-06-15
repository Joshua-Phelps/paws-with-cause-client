import React, { useContext } from 'react';
import { StateContext } from '../App';
import DisplayLocationCard from './DisplayLocationCard';

export default function DisplayLocationsLibrary() {
	const { displayLocations } = useContext(StateContext);

	const renderDisplayLocations = () => {
		return displayLocations.map(loc => {
			return <DisplayLocationCard name={loc.name} address={loc.address} />;
		});
	};

	return <>{renderDisplayLocations()}</>;
}
