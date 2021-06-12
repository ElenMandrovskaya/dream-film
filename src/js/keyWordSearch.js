import MoviesApi from './apiService';
import movieListTpl from '../templates/movieList.hbs';
import getRefs from './getRefs';

const refs = getRefs();
// console.log(refs.searchForm);

// const movieListRef = document.querySelector('.movie__list');
// console.log(movieListRef);    movieSection
const moviesApi = new MoviesApi();

let searchQuery = '';
refs.searchForm.addEventListener('submit', (onSearch));
  
function onSearch(e) {
    e.preventDefault();
// movieListRef.innerHTML = ''; 
//  const form = e.currentTarget;
//  const searchQuery = form.elements.query.value;
    moviesApi.searchQuery = e.currentTarget.elements.query.value.trim(); //поправила
    if (!moviesApi.searchQuery) {
        return
    } //добавила
    refs.movieSection.innerHTML = '';  // перенесла
    moviesApi.resetPage(); // добавила
    refs.searchForm.reset(); // добавила
  //fetch
    moviesApi.getMovies(searchQuery).then(renderMovies);
}

function renderMovies(movies) {
    // if (searchQuery === ' ') {
    //     refs.warning.classList.remove('hidden'); 
    //     return;   
    //  };
    //     // console.log(searchQuery);
    // if (searchQuery >= 1) {
        // refs.warning.classList.add('hidden'); 
    // // spinner.show();

    // refs.movieSection.innerHTML = movieListTpl(movies.results);
    // return;
    // }
    if (movies.total_results === 0) {
        refs.warning.classList.remove('is-hidden'); 
        return;   
    };
    refs.warning.classList.add('is-hidden'); 
    refs.movieSection.innerHTML = movieListTpl(movies.results);
 }

 
 
