export default function MovieCard(props) {
	console.log(props.movie);
	return (
		<>
			<div>
				Movie here
				{/* {movieData.Search.map((movieData, index) => (
					<div key={index}>test</div>
				))} */}
			</div>

			{/* {console.log(movieData.Search[0])}
			{movieData.Search.map((movieData, index) => (
				<div key={index}>test</div>
			))} */}
			{/* <div>{movieList?.Search[0].Title}</div> */}
		</>
	);
}
