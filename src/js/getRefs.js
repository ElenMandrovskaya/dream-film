export default
    function getRefs() {
    return {
      watchedBtn : document.querySelector('.button-watched'),
      queueBtn: document.querySelector('.button-queue'),
      searchForm: document.querySelector('.search-form'),
      movieList: document.querySelector('.section'),
      warning: document.querySelector('.warning'),
      myLibrary: document.querySelector('.nav-link-library'),
      movieSection: document.querySelector('.movie__list'),
      navBtn: document.querySelector('.pagination'),
      prevBtn: document.querySelector('.preview-button'),
      nextBtn: document.querySelector('.next-button'),
      pageList: document.getElementById('pagesList'),
      studentsList: document.querySelector('.students-link'),
  };
}

