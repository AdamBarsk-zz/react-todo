import React from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const LoginButton = props => (
  <div className="login-container">
    {props.auth.loggingIn
      ?
        <Spinner />
      :
        <button onClick={(e) => { e.preventDefault(); props.loginAttempt(); }}>
          <span>
            <i className="fal fa-sign-in" />
          </span>
          <h6>Sign in</h6>
        </button>
    }
  </div>
);

LoginButton.propTypes = {
  loginAttempt: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

export default LoginButton;
