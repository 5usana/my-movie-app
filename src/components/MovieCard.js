//Display data here
import { useState, useEffect } from 'react';

export default function MovieCard(props) {
	const [movieData, setMovieData] = useState('');

	useEffect(() => {
		const getMoviesByName = async (name) => {
			let apiKey = '62c9fe58';
			// accessing the API
			const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${'batman'}`;
			// Get an object of detailed information about the specified movie
			const response = await fetch(url);
			// return an array of movies with a matching title from OMDb API
			const data = await response.json();
			console.log(data);
			setMovieData(data);
		};
		getMoviesByName('batman');
	}, []);

	return (
		<>
			<div>test</div>
			{/* {data.Search.map((movie, index) => (
				<div key={index}>test</div>
			))} */}
			{/* {console.log(data.Search[0])} */}
			{movieData.Search.map((movieData, index) => (
				<div key={index}>test</div>
			))}
			{/* <div>{movieData?.Search[0].Title}</div> */}
		</>
	);
}
