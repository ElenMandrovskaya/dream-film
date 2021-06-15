import movieListTpl from '../templates/movieList.hbs'
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { BASE_URL, API_KEY } from './constants';


const trailerBtn = document.querySelector('.movie__card');

trailerBtn.addEventListener('click', e => { 

    if (e.target.nodeName !== 'BUTTON') {
        return 
    }
    else {
      modalTrailer(e.target.dataset.id);
  }
})

function modalTrailer(id) {
  
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const id = data.results[0].key;
        const instance = basicLightbox.create(`
  <iframe width="560" height="315" src='https://www.youtube.com/embed/${id}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);
        instance.show();
        
        modalCloseTrailer(instance);
        
      })
      .catch(() => {
        const instance = basicLightbox.create(`
    <iframe width="560" height="315" src='http://www.youtube.com/embed/zwBpUdZ0lrQ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `);

        instance.show();
        modalCloseTrailer(instance);
       
      });
  }
function modalCloseTrailer(instance) {
  
    const closeBtn = document.querySelector('.basicLightbox--iframe');
    closeBtn.insertAdjacentHTML(
      'afterbegin',
      `<button
        type="button"
        class="lightbox__button"
        data-action="close-lightbox"
        >&#x2715</button>
    `,
    );
   
    const modalCloseBtn = document.querySelector(
      '[data-action="close-lightbox"]',
    );
  modalCloseBtn.addEventListener('click', () =>instance.close()
    
    )
}
