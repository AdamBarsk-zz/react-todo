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
      <LoginButton loginAttempt={this.loginAttempt} auth={this.props.auth} />
    );
  }
}

Login.propTypes = {
  loginRequest: PropTypes.func.isRequired,
  auth: PropTypes.object,
};

function mapStateToProps(state) {
  return { auth: state.app.auth };
}

function mapDispatchToProps(dispatch) {
  return { dispatch, ...bindActionCreators({ ...authActions }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
