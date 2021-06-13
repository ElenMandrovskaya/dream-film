import getRefs from './getRefs';

const switchHeader = function() {
    getRefs().homeLink.classList.remove('current');
    getRefs().myLibrary.classList.add('current');

    getRefs().menuControls.classList.remove('is-hidden');
    getRefs().menuSearch.classList.add('is-hidden');

    getRefs().header.classList.remove('header__background-home');
    getRefs().header.classList.add('header__background-myLibrary');
}

  getRefs().myLibrary.addEventListener('click', switchHeader)





