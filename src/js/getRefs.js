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
      homeLink: document.querySelector('.nav-link-home'),
      logoLink: document.querySelector('.logo__link'),
      menuControls: document.querySelector('.menu-controls'),
      menuSearch: document.querySelector('.menu-search'),
      header: document.querySelector('.header'),
      studentsList: document.querySelector('.students-link'),
      scrollTop: document.querySelector('.scroll__top'),
      signInBtn: document.querySelector('[data-action="open-modal"]'),
      closeModal: document.querySelector('[data-action="close-modal"]'),
      backdrop: document.querySelector('.js-backdrop'),
      signOutBtn: document.querySelector('.js-singOut-button'),
      userName: document.querySelector('.js-display-username'),
      paginationSection: document.querySelector('.section-pagination'),
  };
}

