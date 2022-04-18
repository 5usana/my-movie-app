// import logo from './logo.svg';
import './App.scss';
import MovieDetails from './components/MovieDetails';
import { movieData } from './components/movieData';

function App() {
	return (
		<div>
			<MovieDetails props={movieData} />
		</div>
	);
}

export default App;
