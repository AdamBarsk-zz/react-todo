import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as todoActions from '../actions/todo';
import * as authActions from '../actions/auth';
import Logo from '../components/Logo';
import Input from '../components/Input';
import LogoutButton from '../components/LogoutButton';

class Header extends Component {
  logoutAttempt = () => {
    this.props.logoutRequest();
  }

  submitTodo = () => {
    this.props.postTodo(this.props.todo.input, this.props.auth.user.uid);
  }

  todoInputChanged = (e) => {
    this.props.todoInput(e.target.value);
  }

  renderHeaderContent() {
    if (this.props.auth.loggedIn) {
      return (
        <Fragment>
          <Input
            submitTodo={this.submitTodo}
            todo={this.props.todo}
            todoInputChanged={this.todoInputChanged}
          />
          <LogoutButton
            logoutAttempt={this.logoutAttempt}
          />
        </Fragment>
      );
    }
  }

  render() {
    return (
      <div className="header-container">
        <Logo name={this.props.auth.user.displayName} />
        {this.renderHeaderContent()}
      </div>
    );
  }
}

Header.propTypes = {
  logoutRequest: PropTypes.func.isRequired,
  postTodo: PropTypes.func.isRequired,
  todoInput: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return { auth: state.app.auth, todo: state.app.todo };
}

function mapDispatchToProps(dispatch) {
  return { dispatch, ...bindActionCreators({ ...todoActions, ...authActions }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
