import MoviesApi from './apiService';
import movieListTpl from '../templates/movieList.hbs';
import getRefs from './getRefs';

const refs = getRefs();
// console.log(refs.searchForm);
// console.log(refs.movieSection);  

const moviesApi = new MoviesApi();

refs.searchForm.addEventListener('submit', (onSearch));
  
function onSearch(e) {
    e.preventDefault();
    moviesApi.searchQuery = e.currentTarget.elements.query.value.trim();
    if (!moviesApi.searchQuery) {
        return
    } 
    // spinner.show();
    refs.movieSection.innerHTML = ''; 
    // refs.searchForm.reset();
    moviesApi.resetPage(); 
  //fetch
    moviesApi.getMovies(searchQuery).then(renderMovies);
}


function renderMovies(movies) {
    if (movies.total_results === 0) {
        refs.warning.classList.remove('is-hidden'); 
        return;   
    };
    refs.warning.classList.add('is-hidden'); 
    refs.movieSection.innerHTML = movieListTpl(movies.results);
 }
   
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

 
 
