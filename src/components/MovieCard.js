import { useState } from 'react';
import MyButton from '../style/StyledComponents';
import Modal from './Modal';
import styled from 'styled-components';
// import MyButton from '../style/StyledComponents';

const MoviesCard = styled.div`
	justify-content: space-evenly;
	border: 1px solid #292828;
	box-shadow: 0px 4px 8px #c8c5dc;
	border-radius: 10px;
	padding: 10px;
	margin: 10px;
	display: flex;
	flex-direction: column;
`;

const MoviesCardDetails = styled.div`
	padding-top: 5px;
`;

export default function MovieCard(props) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<MoviesCard className='MovieCard'>
			<img width='150px' src={props.movie.Poster} alt='Movie Poster' />
			<MoviesCardDetails>
				{props.movie.Title}
				<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
				<MyButton primary onClick={() => setIsModalOpen(true)}>
					Movie
				</MyButton>
			</MoviesCardDetails>
			{/* <MyButton primary>Movie</MyButton> */}
		</MoviesCard>
	);
}
