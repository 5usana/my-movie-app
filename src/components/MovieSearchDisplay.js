import MovieList from './MovieList';
import { useState, useEffect } from 'react';
import MyButton from '../style/StyledComponents';
import styled from 'styled-components';
 

 


const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

// styling with styled components here
const FormInputWrapper = styled.div`
	padding: 20px;
`;

export default function MovieSearchDisplay({ props }) {
	const [movieList, setMovieList] = useState([]);
	const [searchMovie, setSearchMovie] = useState('');
	// const [modalActive, setModalActive] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		const payload = {
			searchMovie: searchMovie,
		};
		console.log('paylod is:', payload);
	}

	const getMoviesByName = async (name) => {
		const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${name}`;
		// Get an object of detailed information about the specified movie
		const response = await fetch(url);
		// return an array of movies with a matching title from OMDb API
		const data = await response.json();
		// console.log(data);
		if (data.Search) {
			setMovieList(data.Search);
		}
	};

	useEffect(() => {
		getMoviesByName(searchMovie);
	}, [searchMovie]);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<FormInputWrapper className='Form-InputWrapper'>
					<label htmlFor='Movie Title'>Search Movie:</label>
					<input
						name='Movie Title'
						type='text'
						value={searchMovie}
						minlength='1'
						onChange={(event) => setSearchMovie(event.target.value)}
					/>
					<MyButton type='submit'>Submit</MyButton>
				</FormInputWrapper>
			</form>
			<MovieList movieList={movieList} />
		</div>
	);
}
