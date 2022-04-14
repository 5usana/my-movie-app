import poster from '../photos/AvengersPoster.jpg';

export default function MovieDetails({ props }) {
	return (
		<div className='MovieDetailsContainer'>
			<div className='MovieCard'>
				<div className='MovieTitle'>{props.Title}</div>
				<div className='ImdbRating'>{props.imdbRating}</div>
				<div className='MovieGenre'>{props.Genre}</div>
				{/* <div className='MoviePoster'>{props.Poster}</div> */}
				<img className='MoviePoster' src={poster} />
				<div className='MovieRated'>{props.Rated}</div>
			</div>
		</div>
	);
}
