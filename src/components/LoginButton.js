import React from 'react';
import PropTypes from 'prop-types';

const LoginButton = props => (
  <div className="login-container">
    <button onClick={(e) => { e.preventDefault(); props.loginAttempt(); }}>Enter</button>
  </div>
);

LoginButton.propTypes = {
  loginAttempt: PropTypes.func.isRequired,
};

export default LoginButton;
