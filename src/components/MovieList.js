import MovieCard from './MovieCard';

export default function MovieList(props) {
	console.log(props.movieList);

	return (
		<div className='movielist'>
			{props.movieList.map((movie) => (
				<MovieCard movie={movie} />
			))}
		</div>
	);
}
