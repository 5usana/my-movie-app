import { useState } from 'react';
import MyButton from '../style/StyledComponents';
import Modal from './Modal';
import styled from 'styled-components';

const MoviesCardContainer = styled.div`
	justify-content: space-evenly;
	border: 1px solid #292828;
	box-shadow: 0px 4px 8px #c8c5dc;
	border-radius: 10px;
	padding: 10px;
	margin: 10px;
	display: flex;
	flex-direction: column;
`;

const MoviesCardTextDetails = styled.div`
	padding-top: 5px;
`;

export default function MovieCard(props) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<MoviesCardContainer>
			<img width='150px' src={props.movie.Poster} alt='Movie Poster' />
			<MoviesCardTextDetails>
				{props.movie.Title}
				<Modal
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
					movieId={props.movie}
				/>
				<MyButton primary onClick={() => setIsModalOpen(true)}>
					Movie
				</MyButton>
			</MoviesCardTextDetails>
		</MoviesCardContainer>
	);
}
