import paginationTpl from '../templates/paginationSection.hbs';

export function builPaginationContainer(arr) {
  let listPages = document.querySelector('#pagesList_library');

  if (arr.length <= 5) {
    listPages.innerHTML = paginationTpl(arr);
  }

  if (arr.length > 5) {
    let newArr = [...arr];
    newArr.splice(5, newArr.length - 1);
    listPages.innerHTML = paginationTpl(newArr);
  }
}

export function paginationList(target, arr) {
  let startPoint = parseInt(target) - 3;
  let endPoint = parseInt(target) + 2;

  if (arr.length <= endPoint) {
    endPoint = arr.length;
  }
  if (startPoint <= 0) {
    startPoint = 0;
    endPoint = 5;
  }
  return arr.slice(startPoint, endPoint);
}

export function paginatedList(dataStorageList) {
  const allUsersFilmsilmsList = dataStorageList.split(',');

  const filmPerList = 20;
  let mainPaginatedList = [];
  let tempList = [];
  let count = 0;

  const completePagesSum = parseInt(allUsersFilmsilmsList.length / filmPerList);
  const lastPageFilms = completePagesSum * filmPerList - 1;
  allUsersFilmsilmsList.forEach(elem => {
    tempList.push(elem);
    if (tempList.length === filmPerList) {
      count += 1;
      mainPaginatedList.push({
        page: `${count}`,
        list: tempList,
        button: 'pagination-list__item_library',
      });
      tempList = [];
    }
  });
  allUsersFilmsilmsList.splice(0, lastPageFilms + 1);
  if (allUsersFilmsilmsList.length !== 0) {
    mainPaginatedList.push({
      page: `${count + 1}`,
      list: allUsersFilmsilmsList,
      button: 'pagination-list__item_library',
    });
  }
  return mainPaginatedList;
}
