// import { useState, useEffect } from 'react';

// export default function MovieList(props) {
// 	const [data, setData] = useState('');

// 	useEffect(() => {
// 		getMoviesByName = async (name) => {
// 			let apiKey = '62c9fe58';
// 			// accessing the API
// 			const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${'batman'}`;
// 			// Get an object of detailed information about the specified movie
// 			const response = await fetch(url);
// 			// return an array of movies with a matching title from OMDb API
// 			const data = await response.json();
// 			console.log(data);
// 			setMovie(data);
// 		};
// 		getMoviesByName('batman');
// 	}, []);
// 	return (
// 		<div>
// 			{/* <DisplayMovieCard />
// 			<DisplayMovieCard /> */}
// 		</div>
// 	);
// }
