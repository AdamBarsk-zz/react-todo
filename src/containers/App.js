import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from './Login';
import Main from './Main';
import ConnectedSwitch from './ConnectedSwitch';
import PrivateRoute from './PrivateRoute';
import Header from './Header';
import Toast from '../components/Toast';

class App extends Component {
  componentDidMount() {
    if (!this.props.auth.loggedIn) { this.props.dispatch(push('/login')); }
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <Toast toast={this.props.toast} />
        <ConnectedSwitch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute authed={this.props.auth.loggedIn} exact path="/" component={Main} />
        </ConnectedSwitch>
      </div>
    );
  }
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
  toast: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { auth: state.app.auth, toast: state.app.toast, router: state.router };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
