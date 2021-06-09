function storeIdFunction(nmaeOfList, filmId) {
  const queryListData = localStorage.getItem(nmaeOfList);
  if (queryListData !== null) {
    let queryList = queryListData.split(',');
    console.log(queryList);
    if (queryList.includes(filmId)) {
      queryList.splice(queryList.indexOf(filmId), 1);
      localStorage.setItem(nmaeOfList, queryList);
    } else {
      queryList.push(filmId);
      localStorage.setItem(nmaeOfList, queryList);
    }
    if (queryList[0] === '') {
      queryList.splice(0, 1);
      localStorage.setItem(nmaeOfList, queryList);
    }
  } else {
    localStorage.setItem(nmaeOfList, filmId);
  }
}

export default function addFilmToUserList(storageSelector, filmId) {
  storeIdFunction(storageSelector, filmId);
  const nmaeOfListMirror = storageSelector === 'wached' ? 'queue' : 'wached';
  storeIdFunction(nmaeOfListMirror, filmId);
}
