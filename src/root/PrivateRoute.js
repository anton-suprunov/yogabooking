import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Auth from '../modules/auth/';

let PrivateRoute = ({ component, isAuthentificated, redirectTo, ...props }) => {
  return (
    isAuthentificated ? 
      <Route component={component} {...props} /> :
      <Redirect 
        to={{
          pathname: redirectTo, 
          state: {from: props.location},
        }} 
      />
  );
};
PrivateRoute.propTypes = {
  component: PropTypes.func || PropTypes.node,
  isAuthentificated: PropTypes.bool,
  redirectTo: PropTypes.string,
  location: PropTypes.object,
};

PrivateRoute = connect(state => ({
  isAuthentificated: Auth.selectors.isAuthentificated(state),
}))(PrivateRoute);


export default PrivateRoute;