import './App.scss';
import React from 'react';
import MovieSearchForm from './components/MovieSearchForm';
import styled from 'styled-components';

export const Body = styled.div`
	background-color: black;
`;

function App({ searchMovie, setSearchMovie, setMovieList }) {
	return (
		<Body>
			<MovieSearchForm
				searchMovie={searchMovie}
				setSearchMovie={setSearchMovie}
				setMovieList={setMovieList}
			/>
		</Body>
	);
}

export default App;
