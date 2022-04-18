import { useState, useEffect } from 'react';

export default function MovieList() {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const json = await response.json();
				console.log(json);
			} catch (error) {
				console.log('error', error);
			}
		};

		fetchData();
	}, []);

	return <div className='MovieListContainer'></div>;
}
