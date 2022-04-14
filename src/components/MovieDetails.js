export default function MovieDetails({ props }) {
	return (
		<div className='MovieDetailsContainer'>
			<div className='MovieTitle'>{props.Title}</div>
			<div className='MovieGenre'>{props.Genre}</div>
			<div className='MoviePoster'>{props.Poster}</div>
			<div className='MovieRated'>{props.Rated}</div>
		</div>
	);
}
