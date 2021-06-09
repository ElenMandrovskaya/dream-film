import MoviesApi from './apiService';
import movieList from '../templates/movieList.hbs'

const movieListRef = document.querySelector('.movie__list');
const movies = new MoviesApi();

export default function renderMainPage() {
    movies.getTrendingMovies().then(renderTrends);
}

function renderTrends(films) {
    movieListRef.innerHTML =  movieList(films.results);    
}

