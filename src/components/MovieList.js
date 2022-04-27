import MovieCard from './MovieCard';

export default function MovieList({ movieList }) {
	// console.log(props.movieList);

	return (
		<div className='MoviesContainer'>
			{movieList.map((movie) => (
				<MovieCard movie={movie} />
			))}
		</div>
	);
}
