import React from 'react';
import {HeroList} from '../heroes/HeroList';

export const DcPage = () => {
  return (
    <div>
      <h1>DcPage</h1>
      <hr />

      <HeroList publisher="DC Comics" />
    </div>
  );
};
