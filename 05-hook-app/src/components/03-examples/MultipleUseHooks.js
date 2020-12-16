import React from 'react';
import {useFetch} from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';

export const MultipleUseHooks = () => {
  const {counter, increment} = useCounter(1);

  const {loading, data} = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  // console.log(counter);

  const {author, quote} = !!data && data[0];

  return (
    <div className="container">
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-center">
          <p className="mb-4"> {author} </p>
          <footer className="blockquote-footer"> {quote} </footer>
        </blockquote>
      )}
      <button className="bnt btn-primary" onClick={increment}>
        Next Quote
      </button>
    </div>
  );
};
