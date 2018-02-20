import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class LoginForm extends Component {
  render() {
    return (
      <div className="login-form">
        <form action="" onSubmit={(e) => { e.preventDefault(); this.props.loginAttempt(); }}>
          {/* <input type="text" placeholder="Email" ref={(email) => { this.email = email; }} />
          <input type="password" placeholder="Password" ref={(password) => { this.password = password; }} /> */}
          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  loginAttempt: PropTypes.func.isRequired,
};
