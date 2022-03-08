import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../selectors/getHeroById';

export const HeroPage = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  const { id, superhero, first_appearance, characters, alter_ego, publisher }: any = hero;

  if (!hero) return <Navigate to="/" />;

  const imgPath = `/assets/heroes/${id}.jpg`;

  const handleReturn = (event: any) => {
    return navigate(-1);
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={imgPath}
          alt={id}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{superhero} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego:</b> {alter_ego}
            <b>Publisher:</b> {publisher}
            <b>First Appearance:</b> {first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Go back...
        </button>
      </div>
    </div>
  );
};
