import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'YOUR-APIKEY',
  authDomain: 'DOMAIN-OF-YOUR-FIREBASE',
  projectId: 'NAME-PROJECTID-FIREBASE',
  storageBucket: 'react-app-cursofh-anbreaker.appspot.XYZ',
  messagingSenderId: '8930ADSF061',
  appId: '1:8930ADF8061:web:ea596b6cbADF4c5bc0ce4',
};

const firebaseConfigTesting = {
  apiKey: 'YOUR-APIKEY',
  authDomain: 'DOMAIN-OF-YOUR-FIREBASE',
  projectId: 'NAME-PROJECTID-FIREBASE',
  storageBucket: 'react-app-cursofh-appspot.XYZ',
  messagingSenderId: '8930ADSF061',
  appId: '1:8930ADF8061:web:ea596b6cbADF4c5bc0ce4',
};

if (process.env.NODE_ENV === 'test') firebase.initializeApp(firebaseConfigTesting);
else firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
