import React, {useContext} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import {AuthContext} from '../auth/AuthContext';
import {PrivateRoute} from './PrivateRoute';
import {PublicRoute} from './PublicRoute';

import {LoginPage} from '../components/login/LoginPage';
import {DashboardRoutes} from './DashboardRoutes';

export const AppRouter = () => {
  const {user} = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginPage}
            isAuthenticate={user.logged}
          />

          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticate={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};
