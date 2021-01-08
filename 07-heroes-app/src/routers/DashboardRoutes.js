import React from 'react';
import {Navbar} from '../components/ui/Navbar';
import {Redirect, Route, Switch} from 'react-router-dom';

import {HeroesPage} from '../components/heroes/HeroesPage';
import {MarvelPage} from '../components/marvel/MarvelPage';
import {DcPage} from '../components/dc/DcPage';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelPage} />
          <Route exact path="/hero/:heroeId" component={HeroesPage} />
          <Route exact path="/dc" component={DcPage} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
