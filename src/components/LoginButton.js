import React from 'react';
import PropTypes from 'prop-types';

const LoginButton = props => (
  <button onClick={(e) => { e.preventDefault(); props.loginAttempt(props.type); }}>
    <span>
      <i className="fal fa-sign-in" />
    </span>
    <h6>{props.text}</h6>
  </button>

);

LoginButton.propTypes = {
  loginAttempt: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default LoginButton;
