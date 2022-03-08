import { heroes } from '../data/heroes';

export const getHeroById = (id = '') => {
  console.log('---------getHero CALL--------');
  return heroes.find((hero) => hero.id === id);
};
