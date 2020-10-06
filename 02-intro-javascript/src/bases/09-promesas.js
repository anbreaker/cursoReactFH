import {getHeroeById} from './bases/08-imports-exports.js';

/*
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(2);
    resolve(heroe);
    reject('No se pudo encontrar al héroe');
  }, 2000);
});

promesa
  .then((heroe) => {
    console.log('heroe', heroe.name);
  })
  .catch((error) => console.warn(error));
*/

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) resolve(heroe);
      else reject('No se pudo encontrar al héroe');
    }, 2000);
  });
};

getHeroeByIdAsync(1)
  // .then((heroe) => console.log('heroe', heroe.name))
  .then(console.log)
  .catch((error) => console.warn(error));
