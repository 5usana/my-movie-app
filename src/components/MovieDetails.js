export default function MovieDetails({ props }) {
	// console.log('This is:', selectedMovie);

	return (
		<div className='SingleMovieContainer'>
			<div className='MovieCard'>
				<div className='MovieTitle'>{props.Title}</div>
				<div className='ImdbRating'>{props.imdbRating}</div>
				<div className='MovieGenre'>{props.Genre}</div>
				<div className='MovieRated'>{props.Rated}</div>
				<img
					className='MoviePoster'
					src={props.Poster}
					alt='Avengers move poster'
				/>
				<div className='Runtime'>{props.Runtime}</div>
				<div className='list'>Actors</div>
				<div className='Actors'>{props.Actors}</div>
				<div className='list'>Plot</div>
				<div className='Plot'>{props.Plot}</div>
			</div>
		</div>
	);
}
