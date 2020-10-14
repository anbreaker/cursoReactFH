import '@testing-library/jest-dom';
import {getHeroeById, getHeroesByOwner} from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes', () => {
  test('Debe de retornar un heroe por id ', () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test('Debe de retornar undefined si heroe no existe', () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  // Debe de retornar un array con los heroes de DC
  // owner
  // toEqual al arreglo filtrado

  test('Debe de retornar un array con los heroes de DC', () => {
    const owner = 'DC';
    const heroesByOwner = getHeroesByOwner(owner);
    const heroesData = heroes.filter((h) => h.owner === owner);
    console.log(heroesData);

    expect(heroesByOwner).toEqual(heroesData);
  });

  // Debe retornar un array con los heroes de Marvel
  // length = 2 // toBe
  test('Debe retornar un array con los heroes de Marvel', () => {
    const owner = 'Marvel';
    const heroesByOwner = getHeroesByOwner(owner);
    expect(heroesByOwner.length).toBe(2);
  });
});
