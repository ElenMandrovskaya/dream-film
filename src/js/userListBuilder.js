import axios from 'axios';

import movieListTPL from '../templates/library.hbs';
import { BASE_URL, API_KEY } from './constants';
import { getTotalPage } from './pagination';// Добавила

export default async function getFilms(nameList) {
  const movieListRef = document.querySelector('.movie__list');
  const userListStorage = localStorage.getItem(nameList);

  const watched = localStorage.getItem('watched');//Добавила
  const queue = localStorage.getItem('queue');//Добавила
  const userTotalListStorage = [];//Добавила
  
  if (watched !== null) { //Добавила
    userTotalListStorage.push(...watched.split(','));
    if (queue !== null) { 
      userTotalListStorage.push(...queue.split(','))
    } 
    getTotalPage(Math.ceil(userTotalListStorage.length / 20))
  }//Добавила
  
  // if (userListStorage !== null) {
    if (userListStorage) {
      const userListMovies = userListStorage.split(',');

      let totalUserFilms = 0;//Добавила

      userListMovies.forEach(async filmId => {

        totalUserFilms += 1;//Добавила
        try {
          const film = await axios(`${BASE_URL}movie/${filmId}?api_key=${API_KEY}&language=ru-RU`);
          movieListRef.insertAdjacentHTML('beforeend', movieListTPL(film.data));
        } catch {
          err => console.log(err);
        }
        getTotalPage(Math.ceil(totalUserFilms / 20));//Добавила
      });
    } 
  // }
}

