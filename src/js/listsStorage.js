export default function storeIdFunction(nmaeOfList, filmId) {
  const queryListData = localStorage.getItem(nmaeOfList);
  if (queryListData !== null) {
    let queryList = queryListData.split(',');
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

  const nmaeOfListMirror = nmaeOfList === 'watched' ? 'queue' : 'watched';
  const queryMirrorListData = localStorage.getItem(nmaeOfListMirror);
  if (queryMirrorListData !== null) {
    let queryMirrorList = queryMirrorListData.split(',');
    if (queryMirrorList.includes(filmId)) {
      queryMirrorList.splice(queryMirrorList.indexOf(filmId), 1);
      localStorage.setItem(nmaeOfListMirror, queryMirrorList);
    }
  }
}
