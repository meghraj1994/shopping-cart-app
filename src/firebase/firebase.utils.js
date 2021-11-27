import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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

//for datastore in firebase this is api call so make it asyn
// documentRef Objects to perform CRUD operations
//snapshot object is to get data ie .get(), documentRef.get()
//documentRef returns a documentSnapshot object
// collectionRef returns querySnap object
//*** userAuth is user object when user login all details are user object */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // console.log('userAuth is', userAuth);
  // console.log('additionaldat is :' + additionalData);
  if (!userAuth) return;

  //firestrore library gives us back two diffrent object
  //1) queryRef or querySnapshot
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log('userRef is: ', userRef);
  const snapShot = await userRef.get();
  // console.log('snapshot is :', snapShot);

  //snapshot is used to check if user is already present in db or not
  //if snapshot is not there it will create and return userRef
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
//use this auth wherever google authentication is required
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//to signIn with google account option
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
