export default function MovieCard(props) {
	return (
		<div className='MoviesContainer'>
			<div className='MovieCard'>
				{props.movie.Title}
				<img src={props.movie.Poster} alt='Movie Poster' />

				<button>Movie</button>
			</div>
		</div>
	);
}
