export default function MovieCard(props) {
	console.log(props.movie);
	return (
		<div className='MoviesContainer'>
			<div className='MovieCard'>
				{props.movie.Title}
				<img src={props.movie.Poster} alt='Movie Poster' />

				<button>Movie</button>
			</div>
			{/* <div>{movieList?.Search[0].Title}</div> */}
			{/* {movieData.Search.map((movieData, index) => (
					<div key={index}>test</div>
				))} */}

			{/* {console.log(movieData.Search[0])}
			{movieData.Search.map((movieData, index) => (
				<div key={index}>test</div>
			))} */}
		</div>
	);
}
