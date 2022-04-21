import './App.scss';
import React from 'react';
import MovieSearchForm from './components/MovieSearchForm';
import SearchBar from './components/SearchBar';

function App() {
	return (
		<div>
			<MovieSearchForm />
			<SearchBar />
		</div>
	);
}

export default App;
