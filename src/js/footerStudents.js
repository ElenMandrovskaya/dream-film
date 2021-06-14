// import getRefs from './getRefs';

import students from './studentsInfo';
import createStudents from '../templates/students.hbs';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

// const refs = getRefs();

const refs = {
  studentsList: document.querySelector('.students-link'),
};

refs.studentsList.addEventListener('click', e => {
  e.preventDefault();
  const modal = basicLightbox.create(createStudents(students));
  modal.show();
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.close();
    };
  });
}
);