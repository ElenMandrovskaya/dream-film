import './sass/main.scss';

import './js/listsStorage';
import './js/apiService';
import './js/apiResultsExample'
import MoviesApi from './js/apiService';
import movieList from './templates/movieList.hbs'

const movieListRef = document.querySelector('.movie__list');

const movies = new MoviesApi();

movies.getTrendingMovies().then(renderTrends);

function renderTrends(films) {
    movieListRef.innerHTML =  movieList(films.results);    
}
