import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {firebase} from '../firebase/firebaseConfig';
import {AuthRouter} from './AuthRouter';
import {PrivateRoute} from './PrivateRoute';
import {PublicRoute} from './PublicRoute';

import {JournalScreen} from '../components/journal/JournalScreen';
import {login} from '../actions/auth';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        console.log(user.uid, user.displayName, 'esto de aqui...');
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path="/auth" component={AuthRouter} isAuthenticate={isLoggedIn} />
          {/* <Route exact path="/" component={JournalScreen} /> */}
          <PrivateRoute
            exact
            path="/"
            component={JournalScreen}
            isAuthenticate={isLoggedIn}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
