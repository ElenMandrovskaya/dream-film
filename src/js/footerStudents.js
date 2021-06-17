import students from './studentsInfo';
import createStudents from '../templates/students.hbs';
import getRefs from './getRefs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const refs = getRefs();

refs.studentsList.addEventListener('click', e => {
  e.preventDefault();
  const modal = basicLightbox.create(createStudents(students));
  modal.show();
  
  const closeBtn = document.querySelector('.footer-close-modal-btn');
  closeBtn.addEventListener('click', e =>{modal.close()});

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.close();
    };
  });
}
);