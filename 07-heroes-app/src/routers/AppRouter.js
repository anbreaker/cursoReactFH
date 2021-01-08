import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {MarvelPage} from '../components/marvel/MarvelPage';
import {Navbar} from '../components/ui/Navbar';
import {LoginPage} from '../login/LoginPage';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" component={MarvelPage} />
        </Switch>
      </div>
    </Router>
  );
};
