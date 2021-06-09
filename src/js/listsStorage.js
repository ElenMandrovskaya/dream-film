function addFilmToUserList(nmaeOfList, filmId) {
  const queryList = localStorage.getItem(nmaeOfList).split(',');

  const nmaeOfListMirror = nmaeOfList === 'wached' ? 'queue' : 'wached';
  const queryListMirror = localStorage.getItem(nmaeOfListMirror).split(',');
  if (queryListMirror.includes(filmId)) {
    queryListMirror.splice(queryListMirror.indexOf(filmId), 1);
    localStorage.setItem(nmaeOfListMirror, queryListMirror);
  }

  if (queryList.includes(filmId)) {
    return;
  } else {
    queryList.push(filmId);
    localStorage.setItem(nmaeOfList, queryList);
  }
}
