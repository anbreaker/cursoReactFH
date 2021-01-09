import React, {useContext} from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {AuthContext} from '../auth/AuthContext';
import {LoginPage} from '../components/login/LoginPage';
import {DashboardRoutes} from './DashboardRoutes';
import {PrivateRoute} from './PrivateRoute';

export const AppRouter = () => {
  const {user} = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginPage} />

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
