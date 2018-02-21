import React from 'react';
import PropTypes from 'prop-types';

const LogoutButton = props => (
  <div className="header-item">
    <button onClick={(e) => { e.preventDefault(); props.logoutAttempt(); }}>Leave</button>
  </div>
);

LogoutButton.propTypes = {
  logoutAttempt: PropTypes.func.isRequired,
};

export default LogoutButton;
