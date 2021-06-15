import modalFilmCard from '../templates/modal.hbs';

import listStorege from './listsStorage';
import { checkButtonsActive, buttonSwitcher } from './buttonsChecker';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const apiKey = 'd91911ebb88751cf9e5c4b8fdf4412c9';

const cardFilm = document.querySelector('.movie__card');

cardFilm.addEventListener('click', openModal);

function fetchOneMovieInfo(movie_id) {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => ({
      ...data,
      popularity: data.popularity.toFixed(1),
    }));
}

function openModal(e) {
  e.preventDefault();

  fetchOneMovieInfo(e.target.dataset.id)
    .then(data => {
      if (e.target.nodeName !== 'IMG') return;

      const markup = modalFilmCard(data);
      const modal = basicLightbox.create(markup);

      modal.show();

      const closeBtn = document.querySelector('.modal-close-btn');
      closeBtn.addEventListener('click', closeModal);

      window.addEventListener('keydown', closeModalHandler);

      function closeModalHandler(e) {
        if (e.code === 'Escape') {
          modal.close();
          window.removeEventListener('keydown', closeModalHandler);
          addToWachedBtn.removeEventListener('click');
        }
      }

      function closeModal(e) {
        modal.close();
        window.removeEventListener('keydown', closeModalHandler);
        addToWachedBtn.removeEventListener('click');
      }

      const addToWachedBtn = document.querySelector('.storage');
      const filmId = e.target.dataset.id;

      checkButtonsActive(filmId);

      addToWachedBtn.addEventListener('click', event => {
        if (event.target.id === 'js-watched') {
          const filmId = event.target.dataset.filmId;
          listStorege('watched', filmId);
          buttonSwitcher(event);
        }
        if (event.target.id === 'js-queue') {
          const filmId = event.target.dataset.filmId;
          listStorege('queue', filmId);
          buttonSwitcher(event);
        }
      });
    })
    .then(data => {})
    .catch(error => {
      console.log('oops!');
    });
}
