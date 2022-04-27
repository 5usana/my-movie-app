import './App.scss';
import GlobalStyle from './style/globalStyles';
import React from 'react';
import MovieSearchDisplay from './components/MovieSearchDisplay';

function App({ searchMovie, setSearchMovie, setMovieList }) {
	return (
		<>
			<GlobalStyle />
			<MovieSearchDisplay
				searchMovie={searchMovie}
				setSearchMovie={setSearchMovie}
				setMovieList={setMovieList}
			/>
		</>
	);
}

export default App;
