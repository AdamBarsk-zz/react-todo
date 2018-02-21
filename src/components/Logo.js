import React from 'react';
import PropTypes from 'prop-types';

const Logo = props => (
  <div className="header-item">
    <h1>{props.name ? props.name : 'Not signed in.'}</h1>
  </div>
);

Logo.propTypes = {
  name: PropTypes.string,
};

export default Logo;
