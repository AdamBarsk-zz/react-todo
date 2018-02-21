import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as authActions from '../actions/auth';

import LoginButton from '../components/LoginButton';

class Login extends Component {
  loginAttempt = () => {
    this.props.loginRequest();
  }

  render() {
    return (
      <LoginButton loginAttempt={this.loginAttempt} />
    );
  }
}

Login.propTypes = {
  loginRequest: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return { dispatch, ...bindActionCreators({ ...authActions }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
