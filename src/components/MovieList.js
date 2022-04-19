import MovieCard from './MovieCard';

export default function MovieList(props) {
	console.log();

	return (
		<div className='movielist'>
			{props.movieList.map((movie) => (
				<MovieCard movie={movie} />
			))}
		</div>
	);
}
