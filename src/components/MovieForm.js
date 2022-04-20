import MovieList from './MovieList';
import { useState, useEffect } from 'react';

export default function MovieForm(props) {
	const [movieList, setMovieList] = useState([]);
	const [searchMovie, setSearchMovie] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		const payload = {
			searchMovie: searchMovie,
		};
		console.log('paylod is:', payload);
	}

	useEffect(() => {
		const getMoviesByName = async (name) => {
			let apiKey = '62c9fe58';
			// accessing the API
			const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${'batman'}`;
			// Get an object of detailed information about the specified movie
			const response = await fetch(url);
			// return an array of movies with a matching title from OMDb API
			const data = await response.json();
			// console.log(data);
			setMovieList(data.Search);
		};
		getMoviesByName('batman');
	}, []);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className='Form-InputWrapper'>
					<label className='Label' htmlFor='Movie Search'>
						Search Movie
					</label>
					<input
						className='Input'
						name='Movie Title'
						type='text'
						value={searchMovie}
						onChange={(event) => setSearchMovie(event.target.value)}
					/>
				</div>
				<button type='submit' className='Button'>
					Submit
				</button>
			</form>
			<MovieList movieList={movieList} />
		</div>
	);
}
