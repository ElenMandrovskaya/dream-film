// import MoviesApi from './apiService';
// import movieList from '../templates/movieList.hbs';
// import getRefs from './getRefs';

// const refs = getRefs();
// const movies = new MoviesApi();

// export default function renderMainPage() {
//     movies.getTrendingMovies().then(renderTrends);
// }

// function renderTrends(films) {
//     refs.movieSection.innerHTML = movieList(films.results);    
// }

/* Старая версия */
// import movieList from '../templates/movieList.hbs';
// import getRefs from './getRefs';

// const refs = getRefs();

// export default function renderMainPage(movies){
//     const markup = movieList(movies);
//     refs.movieSection.insertAdjacentHTML('beforeend', markup);
// };

/*Новая версия с подключенной пагинацией */

import { pagination, next, prev, getTotalPage, setPageList } from './pagination';
import movieList from '../templates/movieList.hbs'
import getRefs from './getRefs';
import MoviesApi from './apiService';
import Spin from './spinner';
// import { Spinner } from 'spin.js';
// import 'spin.js/spin.css';

const moviesApi = new MoviesApi();
const spin = new Spin('spinner-root');
const refs = getRefs();

getTotalPage(pagination.totalPage);

refs.prevBtn.addEventListener('click', onClickPrevBtn);
refs.nextBtn.addEventListener('click', onClickNextBtn);

function onClickPrevBtn() {
    prev();

    moviesApi.selectPage(pagination.currentPage);
    refs.movieSection.innerHTML = '';
    moviesApi.getTrendingMoviesWithGenre().then(response => renderMoviesList(response.results));
}

function onClickNextBtn() {
    next();

    moviesApi.selectPage(pagination.currentPage);
    refs.movieSection.innerHTML = '';
    moviesApi.getTrendingMoviesWithGenre().then(response => renderMoviesList(response.results));
}
    
refs.pageList.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

    moviesApi.selectPage(+e.target.textContent);
    refs.movieSection.innerHTML = '';
    moviesApi.getTrendingMoviesWithGenre().then(response => renderMoviesList(response.results));
}

function renderMoviesList(movies){
    const markup = movieList(movies);
    refs.movieSection.insertAdjacentHTML('beforeend', markup);
};




moviesApi.getTrendingMoviesWithGenre().then(response => {
    getTotalPage(response.total_pages);

    spin.show();
    renderMoviesList(response.results);
    console.log('spin.hide');
    spin.hide();
});

// spin.hide();


document.addEventListener('DOMContentLoaded', setPageList, false);
