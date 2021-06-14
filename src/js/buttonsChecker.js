export default function checkButtonsActive(filmId) {
  const buttonsAdd = document.querySelectorAll('.storage__input.visually-hidden');
  const watchedBtn = buttonsAdd[0];
  const queueBtn = buttonsAdd[1];

  const watchedData = localStorage.getItem('watched');
  const queueData = localStorage.getItem('queue');

  if (watchedData !== null) {
    const watchedList = watchedData.split(',');

    if (watchedList.includes(filmId)) {
      watchedBtn.checked = true;
    }
  }
  if (queueData !== null) {
    const queueList = queueData.split(',');
    if (queueList.includes(filmId)) {
      queueBtn.checked = true;
    }
  }
}
