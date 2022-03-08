import { useNavigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import queryString from 'query-string';

import { HeroCard } from '../../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHerosByName } from '../../selectors/getHeroesByName';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const initialForm = {
    searchText: q,
  };

  const [formValues, handleInputChange, reset]: any = useForm(initialForm);

  const { searchText } = formValues;

  const handleSearch = (event: any) => {
    event.preventDefault();

    navigate(`?q=${searchText}`);
  };

  const heroesFiltered = useMemo(() => getHerosByName(q as string), [q]);

  return (
    <div>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search...</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Hero..."
              name="searchText"
              autoComplete="off"
              className="form-control"
              value={searchText}
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-1">
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === '' ? (
            <div className="alert alert-info">Search a Hero</div>
          ) : (
            heroesFiltered.length === 0 && (
              <div className="alert alert-danger">No Results! with: {q}</div>
            )
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
