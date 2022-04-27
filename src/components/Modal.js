import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import { useEffect } from 'react';
import ReactModal from 'react-modal';

const modalStyles = {
	overlay: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		position: 'relative',
		width: 800,
		height: 600,
		inset: 0,
		padding: 0,
		color: 'black',
	},
};

// const Modal = ({ selectedMovie, movieList }) => {
const Modal = ({ isModalOpen, setIsModalOpen }) => {
	useEffect(() => {
		ReactModal.setAppElement('body');
	}, []);

	return (
		<div className='Container'>
			{/* {movie.Search.map((data, index) => (
				<div key={index}>{data.Title}</div>
			))} */}
			<ReactModal isOpen={isModalOpen} style={modalStyles}>
				<div className='Modal-TitleBar'>
					<div className='Modal-Title'>Movie Modal is open</div>
					<div
						className='Modal-CloseButtonWrapper'
						onClick={() => setIsModalOpen(false)}>
						{/* <FontAwesomeIcon icon={faXmark} size='lg' */}
						{/* /> */}
					</div>
				</div>
			</ReactModal>
			{/* <div className='Card'>
				modal lives here
				<div className='Title'>{movieList[0].Title}</div>
				<div className='ImdbRating'>{movieList[0].imdbRating}</div>
				<div className='MovieGenre'>{movieList[0].Genre}</div>
				<div className='MovieRated'>{movieList[0].Rated}</div>
				<div className='MoviePoster'>{movieList[0].Title}</div>
				<div className='Runtime'>{movieList[0].Runtime}</div>
				<div className='list'>Actors</div>
				<div className='Actors'>{movieList[0].Actors}</div>
				<div className='list'>Plot</div>
				<div className='Plot'>{movieList[0].Plot}</div>
				{console.log('this is a test:', movieList[0].Poster)}
			</div> */}
		</div>
	);
};

export default Modal;
