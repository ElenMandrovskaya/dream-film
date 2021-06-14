import getRefs from './getRefs';
const refs = getRefs();

function activeScroll() {
  const coords = document.documentElement.clientHeight;
  if (window.pageYOffset > coords) {
    refs.scrollTop.classList.add('active-scroll');
  }
  if (window.pageYOffset < coords) {
    refs.scrollTop.classList.remove('active-scroll');
  }
}

function onScrollTop() {
    if (window.pageYOffset > 0) {
        window.scrollTo({
            top: pageXOffset,
            behavior: "smooth"});
  }
}
window.addEventListener('scroll', activeScroll);
refs.scrollTop.addEventListener('click', onScrollTop);