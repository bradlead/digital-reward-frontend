import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({
  exact, path, authenticate, component, ...props
}) => {
  const Component = component;
  return (
    <Route
      exact={exact}
      path={path}
      render={routeProps => (authenticate() ?
        <Component {...routeProps} {...props} /> :
        <Redirect to="/login" />
      )}
    />
  );
};

AuthRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  authenticate: PropTypes.func.isRequired,
};

AuthRoute.defaultProps = {
  exact: false,
};

export default AuthRoute;
