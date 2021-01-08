import React, {useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';
import {getHeroById} from '../../selectors/getHeroById';

export const HeroesPage = ({history}) => {
  const {heroeId} = useParams();

  // const hero = getHeroById(heroeId);
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

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
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail"
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
