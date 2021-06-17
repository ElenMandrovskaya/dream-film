import axios from 'axios';

import movieListTPL from '../templates/library.hbs';

import { BASE_URL, API_KEY } from './constants';
import getRefs from './getRefs';
import { paginatedList, paginationList, builPaginationContainer } from './paginationMyLibrary';
const refs = getRefs();

export function getterFilmList(page) {
  const movieListRef = document.querySelector('.movie__list');
  movieListRef.innerHTML = '';
  console.log(movieListRef);
  page.forEach(async filmId => {
    try {
      const film = await axios(`${BASE_URL}movie/${filmId}?api_key=${API_KEY}&language=ru-RU`);
      const releaseDate = film.data.release_date.split('-')[0];
      film.data.release_date = releaseDate;
      movieListRef.insertAdjacentHTML('beforeend', movieListTPL(film.data));
    } catch {
      err => console.log(err);
    }
  });
}

export function getFilms(nameList) {
  let userListStorage = [];

  if (nameList === 'allUserFilms') {
    const watchedList = localStorage.getItem('watched');
    const queueList = localStorage.getItem('queue');
    if (watchedList !== null && queueList !== null) {
      userListStorage = watchedList + ',' + queueList;
    }
    if (watchedList !== null && queueList === null) {
      userListStorage = watchedList;
    }
    if (queueList !== null && watchedList === null) {
      userListStorage = queueList;
    }
    if (userListStorage !== null) {
      const pagesList = paginatedList(userListStorage);
      pagesList[0].button = 'pagination-list__item_library active';
      getterFilmList(pagesList[0].list);
      builPaginationContainer(paginationList(1, pagesList));

      const pagesSection = document.querySelector('.section-pagination_library.is-hidden');
      pagesSection.classList = 'section-pagination_library';

      return pagesList;
    }
  } else {
    userListStorage = localStorage.getItem(nameList);
    if (userListStorage === null) {
      return;
    } else {
      const pagesList = paginatedList(userListStorage);
      pagesList[0].button = 'pagination-list__item_library active';
      getterFilmList(pagesList[0].list);
      builPaginationContainer(paginationList(1, pagesList));
      return pagesList;
    }
  }
}
