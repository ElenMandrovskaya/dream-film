// import MoviesApi from './apiService';
// import movieListTpl from '../templates/movieList.hbs';
// import getRefs from './getRefs';

// const refs = getRefs();
// console.log(refs.searcForm);

// const movieListRef = document.querySelector('.movie__list');

// const moviesApi = new MoviesApi();

// let searchQuery = '';
// refs.searcForm.addEventListener('submit', (onSearch));
  
// function onSearch(e) {
//     e.preventDefault();
//     movieListRef.innerHTML = ''; 
//  const form = e.currentTarget;
//  const searchQuery = form.elements.query.value;
 
//   //fetch
//     moviesApi.getMovies(searchQuery).then(renderMovies);
// }

// function renderMovies(movies) {
//     if (searchQuery === ' ') {
//         refs.warning.classList.remove('hidden'); 
//         return;   
//      };
//         console.log(searchQuery);

//     if (searchQuery >= 1) {
//         refs.warning.classList.add('hidden'); 
//     // spinner.show();

//     movieList.innerHTML = movieListTpl(movies.results);
//     return;
//     }
   
//  }

 
 
