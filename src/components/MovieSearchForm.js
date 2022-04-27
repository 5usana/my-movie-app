import MovieList from './MovieList';
import { useState, useEffect } from 'react';
import Modal from './Modal';

const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

export default function MovieSearchForm() {
	
	const [movieList, setMovieList] = useState([]);
	const [searchMovie, setSearchMovie] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
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
				<div className='Form-InputWrapper'>
					<label className='Label' htmlFor='Movie Title'>
						Movie Title:
					</label>
					<input
						className='Movie-Input'
						name='Movie Title'
						type='text'
						value={searchMovie}
						minlength='1'
						onChange={(event) => setSearchMovie(event.target.value)}
					/>
				</div>
				<button type='submit' className='Button'>
					Search
				</button>
				<button
					className='Button'
					type='button'
					onClick={() => setIsModalOpen(true)}>
					Open Movie Modal
				</button>
			</form>
			<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<MovieList movieList={movieList} />

			{/* <Modal movieList={movieList} /> */}
		</div>
	);
}
