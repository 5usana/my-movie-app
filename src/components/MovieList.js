import MovieCard from './MovieCard';

export default function MovieList(props) {
	console.log(props.movieList);

	return (
		<div className='MoviesList'>
			{props.movieList.map((movie) => (
				<MovieCard movie={movie} />
			))}
		</div>
	);
}
