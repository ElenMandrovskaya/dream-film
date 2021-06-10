import userListBuilder from './userListBuilder';
import refs from './getRefs';

const buildList = (builderFunction, eve, nameList, secondNameList = null) => {
  refs().movieSection.innerHTML = '';
  if (secondNameList === null) {
    eve.preventDefault();
    builderFunction(nameList);
  } else {
    eve.preventDefault();
    builderFunction(nameList);
    builderFunction(secondNameList);
  }
};

refs().myLibrary.addEventListener('click', event => {
  buildList(userListBuilder, event, 'wached', 'queue');
});

refs().watchedBtn.addEventListener('click', event => {
  buildList(userListBuilder, event, 'wached');
});

refs().queueBtn.addEventListener('click', event => {
  buildList(userListBuilder, event, 'queue');
});
