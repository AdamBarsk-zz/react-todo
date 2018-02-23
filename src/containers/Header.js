import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as taskActions from '../actions/task';
import * as authActions from '../actions/auth';
import * as toastActions from '../actions/toast';
import Logo from '../components/Logo';
import Input from '../components/Input';
import LogoutButton from '../components/LogoutButton';

class Header extends Component {
  logoutAttempt = () => {
    this.props.logoutRequest();
  }

  submitTask = () => {
    this.props.task.input !== ''
      ?
      this.props.postTask(this.props.task.input, this.props.auth.user.uid)
      :
      this.props.showToast('No empty tasks', 'error');
  }

  taskInputChanged = (e) => {
    this.props.taskInput(e.target.value);
  }

  renderHeaderContent() {
    if (this.props.auth.loggedIn) {
      return (
        <Fragment>
          <Input
            submitTask={this.submitTask}
            task={this.props.task}
            taskInputChanged={this.taskInputChanged}
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
        <Logo photoURL={this.props.auth.user.photoURL} />
        {this.renderHeaderContent()}
      </div>
    );
  }
}

Header.propTypes = {
  logoutRequest: PropTypes.func.isRequired,
  postTask: PropTypes.func.isRequired,
  taskInput: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return { auth: state.app.auth, task: state.app.task };
}

function mapDispatchToProps(dispatch) {
  return { dispatch, ...bindActionCreators({ ...taskActions, ...authActions, ...toastActions }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
