import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {AboutPage} from './AboutPage';
import {LoginPage} from './LoginPage';
import {HomePage} from './HomePage';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
};
