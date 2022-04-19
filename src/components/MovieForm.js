import MovieList from './MovieList';
import { useState, useEffect } from 'react';

export default function MovieForm(props) {
	const [movieList, setMovieList] = useState([]);

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
			setMovieList(data.Search);
		};
		getMoviesByName('batman');
	}, []);

	return (
		<div>
			<MovieList movieList={movieList} />
		</div>
	);
}
