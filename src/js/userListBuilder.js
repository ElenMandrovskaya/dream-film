import axios from 'axios';

import { BASE_URL, API_KEY } from './constants';

export default async function getFilms(nameList) {
  const userListStorage = localStorage.getItem(nameList);
  if (userListStorage !== null) {
    if (userListStorage) {
      const userListMovies = userListStorage.split(',');
      userListMovies.forEach(async filmId => {
        try {
          const film = await axios(`${BASE_URL}movie/${filmId}?api_key=${API_KEY}&language=ru-RU`);
          console.log(film.data);
        } catch {
          err => console.log(err);
        }
      });
    } else return;
  }
}
