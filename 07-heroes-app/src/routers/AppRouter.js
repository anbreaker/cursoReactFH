import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {LoginPage} from '../components/login/LoginPage';
import {DashboardRoutes} from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route path="/" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};
