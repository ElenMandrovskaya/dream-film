// import getRefs from './getRefs';

import students from './studentsInfo';
import createStudents from '../templates/students.hbs'

console.log(createStudents);

import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css'

// const refs = getRefs();

const refs = {
  studentsList: document.querySelector('.students'),
};
console.log(students)

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
)