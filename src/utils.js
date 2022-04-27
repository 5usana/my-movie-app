//Objectives --------------------------------------------------------------------------------------------------------------------
/* 1. Write an arrow function called getMoviesByName that takes a string as input and uses fetch and async/await to get an array of movies with a matching title from OMDb API.
  2. Write another arrow function called getMovieDetailsById that takes a valid OMDb movie id as input and uses fetch and async/await to get an object of detailed information about the specified movie. */
// Declare variable for the search input and create a function to get the movie details

// export const getMoviesByName = async (name) => {
// 	let apiKey = 'API KEY HERE';
// 	// accessing the API
// 	const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${name}`;
// 	// Get an object of detailed information about the specified movie
// 	const response = await fetch(url);
// 	// return an array of movies with a matching title from OMDb API
// 	const data = await response.json();
// 	console.log(data);
// };
// getMoviesByName();

// Declare variable for the search input and create a function to get the movie details
// export const getMoviesDetailsById = async (id) => {
// 	let apiKey = 'API KEY HERE';
// 	// accessing the API
// 	const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
// 	// Get an array of movies with a matching id from OMDb API
// 	const response = await fetch(url);
// 	// get an object of detailed information about the specified movie
// 	const data = await response.json();
// 	console.log(data);
// };
// getMoviesDetailsById();
