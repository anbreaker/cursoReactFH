import React from 'react';
import {Redirect, useParams} from 'react-router-dom';
import {getHeroById} from '../../selectors/getHeroById';

export const HeroesPage = () => {
  const {heroeId} = useParams();

  const hero = getHeroById(heroeId);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const {id, superhero, publisher, alter_ego, first_appearance, characters} = hero;

  return (
    <div>
      <h1>HeroesPage</h1>
    </div>
  );
};
