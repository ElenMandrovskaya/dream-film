import MoviesApi from './apiService';
import movieList from '../templates/movieList.hbs';
import getRefs from './getRefs';

const refs = getRefs();
const movies = new MoviesApi();

export default function renderMainPage() {
    movies.getTrendingMovies().then(renderTrends);
}

function renderTrends(films) {
    refs.movieSection.innerHTML = movieList(films.results);    
}

