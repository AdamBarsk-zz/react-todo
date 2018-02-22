import React from 'react';
import PropTypes from 'prop-types';

const Logo = props => (
  <div className="header-item">
    {props.photoURL ? <img src={props.photoURL} alt="profile" /> : <h6>Tasklist</h6>}
  </div>
);

Logo.propTypes = {
  photoURL: PropTypes.string,
};

export default Logo;
