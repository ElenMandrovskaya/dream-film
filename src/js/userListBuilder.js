import axios from 'axios';

import movieListTPL from '../templates/library.hbs';
import { BASE_URL, API_KEY } from './constants';

export default async function getFilms(nameList) {
  const movieListRef = document.querySelector('.movie__list');
  const userListStorage = localStorage.getItem(nameList);
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
  }
}
