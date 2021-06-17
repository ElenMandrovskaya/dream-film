import { getFilms, getterFilmList } from './userListBuilder';
import { paginationList, builPaginationContainer } from './paginationMyLibrary';
import refs from './getRefs';

const { movieSection, myLibrary, watchedBtn, queueBtn, header } = refs();

let mainMoviesArr = [];

myLibrary.addEventListener('click', event => {
  event.preventDefault();
  const mainPaginationSection = document.querySelector('.section-pagination');
  mainPaginationSection.classList = 'section-pagination is-hidden';
  movieSection.innerHTML = '';
  mainMoviesArr = getFilms('allUserFilms');
});

watchedBtn.addEventListener('click', event => {
  event.preventDefault();
  movieSection.innerHTML = '';
  mainMoviesArr = getFilms('watched');
});

queueBtn.addEventListener('click', event => {
  event.preventDefault();
  movieSection.innerHTML = '';
  mainMoviesArr = getFilms('queue');
});

const paginationSection = document.querySelector('.pagination_library');

paginationSection.addEventListener('click', event => {
  if (event.target.classList.value === 'pagination-list__item_library') {
    const targetPage = event.target.dataset.pageNumber;
    mainMoviesArr.forEach(elem => (elem.button = 'pagination-list__item_library'));
    mainMoviesArr[targetPage - 1].button = 'pagination-list__item_library active';
    getterFilmList(mainMoviesArr[targetPage - 1].list);
    const targetArray = paginationList(targetPage, mainMoviesArr);
    builPaginationContainer(targetArray);
  }
});
