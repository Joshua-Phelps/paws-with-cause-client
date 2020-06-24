import React, { useState, useEffect } from 'react';
import { api } from '../services/api';

export default function GalleryShowPage({ history, location }) {
	const [gallery, setGallery] = useState({});
	const [update, setUpdate] = useState(false);

	useEffect(() => {
		let id = parseInt(location.pathname.split('/galleries/')[1]);
		api.galleries
			.getGalleryById(id)
			.then(gallery => setGallery(gallery))
			.catch(err => console.log(err));
	}, [update]);

	return <>{gallery.name}</>;
}
