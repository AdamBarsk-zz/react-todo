import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as authActions from '../actions/auth';

import LoginForm from '../components/LoginForm';

class Login extends Component {
  loginAttempt = () => {
    this.props.loginRequest();
  }

  render() {
    return (
      <LoginForm loginAttempt={this.loginAttempt} />
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return { dispatch, ...bindActionCreators({ ...authActions }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  loginRequest: PropTypes.func.isRequired,
};
