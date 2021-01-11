import React, {useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';
import {getHeroById} from '../../selectors/getHeroById';

export const HeroesPage = ({history}) => {
  const {heroId} = useParams();

  // const hero = getHeroById(heroeId);
  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  // Info para los test
  // console.log('Hero: ', hero, 'HeroId: ', heroId);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) history.push('/');
    else history.goBack();
  };

  const {id, superhero, publisher, alter_ego, first_appearance, characters} = hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroId}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-groupitem">
            <b>Alter Ego: {alter_ego} </b>
          </li>
          <li className="list-groupitem">
            <b>publisher: {publisher} </b>
          </li>
          <li className="list-groupitem">
            <b>First Appearance: {first_appearance} </b>
          </li>
          <li className="list-groupitem">
            <b>Info Id: {id} </b>
          </li>
        </ul>

        <h5>
          <b>Characters</b>
        </h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
