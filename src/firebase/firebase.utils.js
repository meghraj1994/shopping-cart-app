import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//old
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

//got this config file from firebse while creating app
const config = {
  apiKey: 'AIzaSyDT40amGaul31jLn9zVDtVfFGhT_mIjbdU',
  authDomain: 'shopping-cart-db-76498.firebaseapp.com',
  projectId: 'shopping-cart-db-76498',
  storageBucket: 'shopping-cart-db-76498.appspot.com',
  messagingSenderId: '1014703428777',
  appId: '1:1014703428777:web:340826ac56127ed65c45b8',
  measurementId: 'G-ZE0C1LSVYW',
};

firebase.initializeApp(config);

//use this auth wherever google authentication is required
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//to signIn with google account option
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
