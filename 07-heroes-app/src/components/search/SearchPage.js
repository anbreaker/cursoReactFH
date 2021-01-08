import React from 'react';
import {useLocation} from 'react-router-dom';
import queryString from 'query-string';

import {heroes} from '../../data/heroes';
import {useForm} from '../../hooks/useForm';
import {HeroCard} from '../heroes/HeroCard';

export const SearchPage = ({history}) => {
  const heroesFiltered = heroes;

  const location = useLocation();
  const {q = ''} = queryString.parse(location.search);
  console.log(q);

  const initialForm = {
    searchText: q,
  };
  const [formValues, handleInputChange] = useForm(initialForm);

  const {searchText} = formValues;

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
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
