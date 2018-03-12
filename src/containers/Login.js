import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as authActions from '../actions/auth';

import LoginButton from '../components/LoginButton';
import Spinner from '../components/Spinner';


class Login extends Component {
  loginAttempt = (type) => {
    type === 'google' ? this.props.loginRequest() : this.props.anonymousRequest();
  }

  render() {
    return (
      <div className="login-container">
        {this.props.auth.loggingIn
        ?
          <Spinner />
        :
          <Fragment>
            <LoginButton loginAttempt={this.loginAttempt} text="Sign in with Google" type="google" />
            <LoginButton loginAttempt={this.loginAttempt} text="Test it out Anonymously" type="anonymously" />
          </Fragment>
      }
      </div>
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
