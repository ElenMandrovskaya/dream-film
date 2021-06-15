import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebaseui';
import '../../node_modules/firebaseui/dist/firebaseui.css';
import getRefs from './getRefs';
const refs = getRefs();

refs.openModalBtn.addEventListener('click', onOpenModal),
refs.closeModalBtn.addEventListener('click', onCloseModal),
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.remove('is-hidden');
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}
function showLogOutbutton() {
  refs.logOutbutton.classList.remove('is-hidden');
  refs.openModalBtn.classList.add('is-hidden');
}

function showOpenModalBtn() {
  refs.openModalBtn.classList.remove('is-hidden');
  refs.logOutbutton.classList.add('is-hidden');
}

const firebaseConfig = {
    apiKey: "AIzaSyDnCEIIOJCFL91SC_rnap8gXfT07xMlAL0",
    authDomain: "dream-film-7c6b0.firebaseapp.com",
    databaseURL: "https://filmoteka-login-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "dream-film-7c6b0",
    storageBucket: "dream-film-7c6b0.appspot.com",
    messagingSenderId: "206774387759",
    appId: "1:206774387759:web:38b3c9ed2aeadf3a48b2da"
};
  
firebase.initializeApp(firebaseConfig);
const ui = new firebaseui.auth.AuthUI(firebase.auth());
const uiStart = () => ui.start('#firebaseui-auth-container', uiConfig);

let currentUserId = '';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: function (authResult) {
      if (authResult) {
        location.reload();

        setUserData(firebaseUser.uid);
        return true;
      }
    },
  },
};
refs.logOutbutton.addEventListener('click', e => {
  firebase.auth().signOut();
  localStorage.removeItem('currentUserId');
  window.location.reload();
});

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    let displayName = firebaseUser.displayName;
    if (displayName === null) {
      displayName = 'guest';
    }
    refs.userName.innerHTML = `${displayName}`;
    document.body.classList.remove('show-modal');
    showLogOutbutton();
    localStorage.setItem('currentUserId', JSON.stringify(firebaseUser.uid));
    currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
    // console.log(currentUserId);

    // if (!getUserLibraryFromDatabase(currentUserId)) {
    //   setUserData(currentUserId);
    // }
  } else {
    refs.userName.innerHTML = '';
    showOpenModalBtn();
    uiStart();
  }
});

function setUserData(userId) {
  const userLibrary = {
    userId: userId,
    userWatched: [],
    userQueue: [],
  };
  const updates = {};
  updates['users/' + userId] = userLibrary;
  return firebase.database().ref().update(updates);
}
