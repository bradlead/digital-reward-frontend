import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthRoute from './components/auth-route';
import NavBar from './components/NavBar';
import Rewards from './components/Rewards';
import Login from './components/Login';
import MonzoLogin from './components/monzo-login';
import Map from './components/Map';

import TokenManager from './utils/token-manager';

import './style.scss';

const AppRoutes = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          component={Rewards}
        />
        <Route
          exact
          path="/Map"
          component={Map}
        />
      </Switch>
    </React.Fragment>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: TokenManager.isTokenValid() ? TokenManager.getTokenPayload() : null,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  handleLogin() {
    this.setState({ user: TokenManager.getTokenPayload() });
  }

  isLoggedIn() {
    return Boolean(this.state.user) && TokenManager.isTokenValid();
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            exact
            path="/login"
            render={props => (
              <Login {...props} onLogin={this.handleLogin} />
            )}
          />
          <Route
            exact
            path="/login-monzo"
            render={props => (
              <MonzoLogin {...props} onLogin={this.handleLogin} />
            )}
          />
          <AuthRoute
            component={AppRoutes}
            authenticate={this.isLoggedIn}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
