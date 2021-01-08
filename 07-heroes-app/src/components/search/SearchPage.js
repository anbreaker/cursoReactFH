import React, {useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import queryString from 'query-string';

import {useForm} from '../../hooks/useForm';
import {HeroCard} from '../heroes/HeroCard';
import {getHeroesByName} from '../../selectors/getHeroesByName';

export const SearchPage = ({history}) => {
  const location = useLocation();
  const {q = ''} = queryString.parse(location.search);

  const initialForm = {
    searchText: q,
  };

  const [formValues, handleInputChange] = useForm(initialForm);

  const {searchText} = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (event) => {
    event.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button className="btn m-1 btn-block btn-outline-primary" type="submit">
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === '' && <div className="alert alert-info">Search a Hero</div>}
          {q !== '' && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">There is not a Hero with "{q}" </div>
          )}
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
