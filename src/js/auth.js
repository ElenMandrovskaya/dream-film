import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebaseui';
import '../../node_modules/firebaseui/dist/firebaseui.css';  
import getRefs from './getRefs';
const refs = getRefs();

refs.signInBtn.addEventListener('click', onOpenModal),
refs.closeModal.addEventListener('click', onCloseModal),
refs.backdrop.addEventListener('click', onBackdrop);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-is-active');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('modal-is-active');
}

function onBackdrop(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}
function activeSignOut() {
  refs.signOutBtn.classList.remove('is-hidden');
  refs.signInBtn.classList.add('is-hidden');
}

function activeSignIn() {
  refs.signInBtn.classList.remove('is-hidden');
  refs.signOutBtn.classList.add('is-hidden');
}

// FIREBASE

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
const authUI = new firebaseui.auth.AuthUI(firebase.auth());
const authStart = () => authUI.start('#firebaseui-auth-container', modalConfig);

const modalConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ]
};
let currentUserId = '';

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    let displayName = firebaseUser.displayName;
    refs.userName.innerHTML = `${displayName}`;
    document.body.classList.remove('modal-is-active');
    activeSignOut();
    localStorage.setItem('currentUserId', JSON.stringify(firebaseUser.uid));
    currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
  } else {
    refs.userName.innerHTML = '';
    activeSignIn();
    authStart();
  }
});

refs.signOutBtn.addEventListener('click', e => {
  firebase.auth().signOut();
  localStorage.removeItem('currentUserId');
  window.location.reload();
});



