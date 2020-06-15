import React from 'react';

export default function DisplayLocationCard({ address, name }) {
	return (
		<>
			<h1>
				{address} {name}
			</h1>
		</>
	);
}
