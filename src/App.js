import './App.scss';
import React from 'react';
import MovieSearchForm from './components/MovieSearchForm';

// import SearchBar from './components/SearchBar';

function App({ searchMovie, setSearchMovie, setMovieList }) {
	return (
		<div>
			<MovieSearchForm
				searchMovie={searchMovie}
				setSearchMovie={setSearchMovie}
				setMovieList={setMovieList}
			/>
		</div>
	);
}

export default App;
