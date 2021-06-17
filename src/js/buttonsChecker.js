export function checkButtonsActive(filmId) {
  const buttonsAdd = document.querySelectorAll('.storage__input.visually-hidden');
  const watchedBtn = buttonsAdd[0];
  const queueBtn = buttonsAdd[1];

  const watchedData = localStorage.getItem('watched');
  const queueData = localStorage.getItem('queue');

  if (watchedData !== null) {
    const watchedList = watchedData.split(',');
    if (watchedList.includes(filmId)) {
      watchedBtn.checked = true;
      watchedBtn.nextElementSibling.textContent = 'REMOVE';
    }
  }
  if (queueData !== null) {
    const queueList = queueData.split(',');
    if (queueList.includes(filmId)) {
      queueBtn.checked = true;
      queueBtn.nextElementSibling.textContent = 'REMOVE';
    }
  }
}

export function buttonSwitcher(filmId) {
  const buttonsAdd = document.querySelectorAll('.storage__input.visually-hidden');
  const watchedBtn = buttonsAdd[0];
  const queueBtn = buttonsAdd[1];
  if (filmId.target.id === 'js-queue') {
    watchedBtn.checked = false;
    watchedBtn.nextElementSibling.textContent = 'TO WATCHED';
    queueBtn.nextElementSibling.textContent = 'REMOVE';
  }
  if (filmId.target.id === 'js-watched') {
    queueBtn.checked = false;
    queueBtn.nextElementSibling.textContent = 'TO QUEUE';
    watchedBtn.nextElementSibling.textContent = 'REMOVE';
  }
}
