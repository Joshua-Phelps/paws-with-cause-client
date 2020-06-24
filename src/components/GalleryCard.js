import React from 'react';
import { Link } from 'react-router-dom';

export default function GalleryCard({
	gallery: { name, address, id },
	history,
}) {
	const handleClick = () => {
		history.push(`/galleries/${id}`);
	};

	return (
		<div onClick={handleClick}>
			<div>{name}</div>
			<div>{address}</div>
		</div>
	);
}
