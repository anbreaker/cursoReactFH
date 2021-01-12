import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBy_bno_bAQgkScfRpnlvcKafUn6K5iLWI',
  authDomain: 'sql-demos-f3529.firebaseapp.com',
  projectId: 'sql-demos-f3529',
  storageBucket: 'sql-demos-f3529.appspot.com',
  messagingSenderId: '200185735709',
  appId: '1:200185735709:web:27a5232527b5d46045f4f4',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log('Firebase configurado');

//const db = firebase.firestore();
export default firebase.firestore();
