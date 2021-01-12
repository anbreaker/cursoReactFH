import db from '../firebase/config';
import {showDocuments} from '../helpers/showDocuments';

const user = {
  name: 'Curro',
  active: false,
  data: 25,
};

const usersRef = db.collection('users');
// insert into users
db.collection('users')
  .add(user)
  .then((docRef) => {
    console.log(docRef.id);
  })
  .catch((error) => console.log('error', error));

usersRef.doc('UPjVLD1hSl39Si9L54P0').update({
  active: false,
  name: 'Magali',
});

// Modifica la coleccion desturyendo lo que hubiera
usersRef.doc('UPjVLD1hSl39Si9L54P0').set({
  active: false,
  name: 'Magali',
});

// delete from users where id = 'xx'
usersRef
  .doc('AZSx13PEI1E1lRw1dxKw')
  .delete()
  .then(() => console.log('delete'))
  .catch((error) => console.log('error', error));

//  select * from users;
usersRef.onSnapshot((snap) => {
  showDocuments(snap);
});

usersRef.onSnapshot(showDocuments);

/*
   Select * from users
     Where active = true
*/
usersRef.where('active', '==', true).get().then(showDocuments);

/*
   Select * from users
   Where salary > 1000
*/
usersRef.where('salary', '>', 1000).get().then(showDocuments);

/*
   Select * from users
   Where salary > 1000 and salary < 1700
*/
usersRef.where('salary', '>', 1000).where('salary', '<', 1700).get().then(showDocuments);

/*
   Select * from users
   Where salary > 1000 and active = true
*/
usersRef.where('salary', '>', 1000).where('active', '==', true).get().then(showDocuments);

// select * from users order by name adc, salary asc
usersRef.orderBy('name').orderBy('salary').get().then(showDocuments);
