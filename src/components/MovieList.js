import MovieCard from './MovieCard';
import styled from 'styled-components';

const SearchedMoviesContainer = styled.div`
	padding: 10px 0;
	display: flex;
`;

export default function MovieList({ movieList }) {
	return (
		<SearchedMoviesContainer>
			{movieList.map((movie) => (
				<MovieCard movie={movie} />
			))}
		</SearchedMoviesContainer>
	);
}
