import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyDyJCbVHxY_NBeog1WpCFjBRhQlrf4ltwI',
  authDomain: 'react-app-cursofh-anbreaker.firebaseapp.com',
  projectId: 'react-app-cursofh-anbreaker',
  storageBucket: 'react-app-cursofh-anbreaker.appspot.com',
  messagingSenderId: '893002318061',
  appId: '1:893002318061:web:ea596b6cbc73c4c5bc0ce4',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {db, googleAuthProvider, firebase};
