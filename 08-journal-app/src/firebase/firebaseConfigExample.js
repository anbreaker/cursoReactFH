import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'YourApiKEy',
  authDomain: 'DataGoogle...',
  projectId: 'react-app-curso-fae04',
  storageBucket: 'react-app-curso-fae04.appspot.com',
  messagingSenderId: '6adsf22632',
  appId: '1:appId32:web:50967cf169396ffc8fa9bd',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {db, googleAuthProvider, firebase};
