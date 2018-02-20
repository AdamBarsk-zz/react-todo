import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import fire from '../firebase/config';
import Login from './Login';
import Main from './Main';
import ConnectedSwitch from './ConnectedSwitch';
import PrivateRoute from './PrivateRoute';


class App extends Component {
  componentDidMount() {
    if (!this.props.auth.loggedIn) { this.props.dispatch(push('/login')); }
  }

  render() {
    return (
      <div className="main">
        <ConnectedSwitch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute authed={this.props.auth.loggedIn} path="/" component={Main} />
        </ConnectedSwitch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.app.auth };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  auth: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  dispatch: PropTypes.func.isRequired,
};
