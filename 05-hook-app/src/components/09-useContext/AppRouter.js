import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {AboutPage} from './AboutPage';
import {LoginPage} from './LoginPage';
import {HomePage} from './HomePage';
import {Navbar} from './Navbar';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/" component={HomePage} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
