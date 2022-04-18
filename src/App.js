// import logo from './logo.svg';
import './App.scss';
import MovieDetails from './components/MovieDetails';
import { movieData } from './components/movieData';
import React from 'react';
// import { getMoviesByName } from './utils';

function App() {
	// const [movie, setMovie] = React.useState('');

	// React.useEffect(() => {
	// 	getMoviesByName = async (name) => {
	// 		let apiKey = 'API KEY HERE';
	// 		// accessing the API
	// 		const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${name}`;
	// 		// Get an object of detailed information about the specified movie
	// 		const response = await fetch(url);
	// 		// return an array of movies with a matching title from OMDb API
	// 		const data = await response.json();
	// 		console.log(data);
	// 		setMovie(data);
	// 	};
	// 	getMoviesByName('batman');
	// }, []);

	return (
		<div>
			<MovieDetails props={movieData} />
		</div>
	);
}

export default App;
