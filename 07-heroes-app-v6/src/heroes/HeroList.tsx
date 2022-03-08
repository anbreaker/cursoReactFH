import { useMemo } from 'react';

import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../selectors/getHeroByPublisher';

export const HeroList = ({ publisher }: any) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
