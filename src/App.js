// import logo from './logo.svg';
import './App.scss';
// import MovieDetails from './components/MovieDetails';
// import { movieData } from './components/movieData';
import React from 'react';
import MovieCard from './components/MovieCard';
// import { getMoviesByName } from './utils';


function App() {

	return (
		<div>
			<MovieCard />
			{/* <MovieDetails props={movieData} /> */}
		</div>
	);
}

export default App;
