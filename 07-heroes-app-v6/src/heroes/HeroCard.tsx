import { Link } from 'react-router-dom';

export const HeroCard = (props: any) => {
  const { id, superhero, publisher, alter_ego, first_appearance, characters } = props;

  const imagePath = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col">
            <img src={imagePath} alt={superhero} className="card-img" />
          </div>

          <div className="col-8">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{superhero}</p>

            {alter_ego !== characters && <p className="text-muted">{characters} </p>}

            <Link to={`/hero/${id}`}>More...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
