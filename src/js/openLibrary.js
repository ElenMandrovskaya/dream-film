import userListBuilder from './userListBuilder';
import refs from './getRefs';

const { movieSection, myLibrary, watchedBtn, queueBtn } = refs();

// console.log(movieSection);

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
  buildList(userListBuilder, event, 'wached', 'queue');
});

watchedBtn.addEventListener('click', event => {
  buildList(userListBuilder, event, 'wached');
});

queueBtn.addEventListener('click', event => {
  buildList(userListBuilder, event, 'queue');
});
