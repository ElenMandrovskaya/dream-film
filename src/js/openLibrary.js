import userListBuilder from './userListBuilder';
import refs from './getRefs';

const { movieSection, myLibrary, watchedBtn, queueBtn } = refs();

const buildList = (builderFunction, eve, nameList, secondNameList = null) => {
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
