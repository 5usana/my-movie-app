import MovieCard from './MovieCard';
import styled from 'styled-components';

const MoviesContainer = styled.div`
	padding: 10px 0;
	display: flex;
`;

export default function MovieList({ movieList }) {
	// console.log(props.movieList);

	return (
		<MoviesContainer>
			{movieList.map((movie) => (
				<MovieCard movie={movie} />
			))}
		</MoviesContainer>
	);
}
