// import { useState, useEffect } from 'react';

export default function MovieCard(props) {
	// console.log(props.movie);
	// const [displayMovie, setDisplayMovie] = useState('');

	// useEffect(() => {
	// 	const getMoviesByName = async (name) => {
	// 		let apiKey = '62c9fe58';
	// 		// accessing the API
	// 		const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${'batman'}`;
	// 		// Get an object of detailed information about the specified movie
	// 		const response = await fetch(url);
	// 		// return an array of movies with a matching title from OMDb API
	// 		const data = await response.json();
	// 		// console.log(data);
	// 		setMovieList(data.Search);
	// 	};
	// 	getMoviesByName('batman');
	// }, []); // ALWAYS add a dependency list here, even if it's just an empty array.

	return (
		<div className='MoviesContainer'>
			<div className='MovieCard'>
				{props.movie.Title}
				<img src={props.movie.Poster} alt='Movie Poster' />

				<button>Movie</button>
			</div>
		</div>
	);
}
