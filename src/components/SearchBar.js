import React, { useState } from 'react';

function SearchBar({ searchMovie, setSearchMovie, setMovieList }) {
	const getMoviesByName = async (name) => {
		let apiKey = '62c9fe58';
		// accessing the API
		const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${'name'}`;
		// Get an object of detailed information about the specified movie
		const response = await fetch(url);
		// return an array of movies with a matching title from OMDb API
		const data = await response.json();
		// console.log(data);
		setMovieList(data.Search);
	};

	function handleSubmit(e) {
		e.preventDefault();
		// const payload = { searchTerm };
		// console.log("This is the payload: ", payload);
		getMoviesByName(searchMovie);
		console.log('Search Movie: ', searchMovie);
	}
	return (
		<>
			<form className='Movie-Form' onSubmit={handleSubmit}>
				<input
					className='Movie-Input'
					type='text'
					value={searchMovie}
					onChange={(e) => setSearchMovie(e.target.value)}
				/>

				<button type='submit'>Search</button>
			</form>
		</>
	);
}

export default SearchBar;
