import db from './firebase/config';

const user = {
  name: 'Curro',
  active: false,
  data: 25,
};

const userRef = db.collection('users');
// insert into users
// db.collection('users')
//   .add(user)
//   .then((docRef) => {
//     console.log(docRef.id);
//   })
//   .catch((error) => console.log('error', error));

// userRef.doc('UPjVLD1hSl39Si9L54P0').update({
//   active: false,
//   name: 'Magali',
// })

// Modifica la coleccion desturyendo lo que hubiera
// userRef.doc('UPjVLD1hSl39Si9L54P0').set({
//   active: false,
//   name: 'Magali',
// });

// delete from users where id = 'xx'
// userRef
//   .doc('AZSx13PEI1E1lRw1dxKw')
//   .delete()
//   .then(() => console.log('delete'))
//   .catch((error) => console.log('error', error));
