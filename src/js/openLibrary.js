import userListBuilder from './userListBuilder';
import refs from './getRefs';
import { pagination } from './pagination';

const { movieSection, myLibrary, watchedBtn, queueBtn } = refs();

const buildList = (builderFunction, eve, nameList, secondNameList = null) => {
  pagination.currentPage = 1;//Добавила
  movieSection.innerHTML = '';
  if (secondNameList === null) {
    eve.preventDefault();
    builderFunction(nameList);
  } else {
    eve.preventDefault();
    builderFunction(nameList);
    builderFunction(secondNameList);
  }
};

myLibrary.addEventListener('click', event => {
  buildList(userListBuilder, event, 'watched', 'queue');
});

watchedBtn.addEventListener('click', event => {
  buildList(userListBuilder, event, 'watched');
});

queueBtn.addEventListener('click', event => {
  buildList(userListBuilder, event, 'queue');
});
