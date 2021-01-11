import React from 'react';
import {Navbar} from '../components/ui/Navbar';
import {Redirect, Route, Switch} from 'react-router-dom';

import {HeroesPage} from '../components/heroes/HeroesPage';
import {MarvelPage} from '../components/marvel/MarvelPage';
import {DcPage} from '../components/dc/DcPage';
import {SearchPage} from '../components/search/SearchPage';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelPage} />
          <Route exact path="/hero/:heroId" component={HeroesPage} />
          <Route exact path="/dc" component={DcPage} />
          <Route exact path="/search" component={SearchPage} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
