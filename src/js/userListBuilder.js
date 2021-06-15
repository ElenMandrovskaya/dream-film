import axios from 'axios';

import movieListTPL from '../templates/library.hbs';
import { BASE_URL, API_KEY } from './constants';
import getRefs from './getRefs';
const refs = getRefs();

export default async function getFilms(nameList) {
  const movieListRef = document.querySelector('.movie__list');
  const userListStorage = localStorage.getItem(nameList);

  const watched = localStorage.getItem('watched');
  const queue = localStorage.getItem('queue');
  // console.log(watched);
  if (watched !== null && queue !== null) {
    refs.paginationSection.classList.add('is-hidden');
  }

  if (userListStorage !== null) {
    const userListMovies = userListStorage.split(',');
    userListMovies.forEach(async filmId => {
      try {
        const film = await axios(`${BASE_URL}movie/${filmId}?api_key=${API_KEY}&language=ru-RU`);
        const releaseDate = film.data.release_date.split('-')[0];
        film.data.release_date = releaseDate;
        movieListRef.insertAdjacentHTML('beforeend', movieListTPL(film.data));
      } catch {
        err => console.log(err);
      }
    });
  } else {
    refs.paginationSection.classList.add('is-hidden');
  }
}
