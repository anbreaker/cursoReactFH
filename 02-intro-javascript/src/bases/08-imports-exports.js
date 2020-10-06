import heroes, {owners} from '../data/heroes.js';

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
// console.log(getHeroeById(2));

export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
// console.log(getHeroeByOwner('DC'));

// console.log('Prueba importacion individual\n', owners);
