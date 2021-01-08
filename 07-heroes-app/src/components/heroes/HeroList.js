import React, {useMemo} from 'react';
import {getHeroByPublisher} from '../../selectors/getHeroByPublisher';
import {HeroCard} from './HeroCard';

export const HeroList = ({publisher}) => {
  // const heroes = getHeroByPublisher(publisher);
  //useMemo, cambia si lo hace el publisher
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <div className="card-columns">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
