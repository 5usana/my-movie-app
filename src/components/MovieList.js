import MovieCard from './MovieCard';
import styled from 'styled-components';
// import MovieDetails from './MovieDetails';

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
			{/* <MovieDetails /> */}
		</SearchedMoviesContainer>
	);
}
