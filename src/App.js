import './App.scss';
import GlobalStyle from './style/globalStyles';
import React from 'react';
import MovieSearchForm from './components/MovieSearchForm';

function App({ searchMovie, setSearchMovie, setMovieList }) {
	return (
		<>
			<GlobalStyle />
			<MovieSearchForm
				searchMovie={searchMovie}
				setSearchMovie={setSearchMovie}
				setMovieList={setMovieList}
			/>
		</>
	);
}

export default App;
