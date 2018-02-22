import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as taskActions from '../actions/task';
import * as authActions from '../actions/auth';

import Task from '../components/Task';
import Spinner from '../components/Spinner';

class Main extends Component {
  componentWillMount() {
    this.props.loadTasks(this.props.auth.user.uid);
  }

  handleDoneClick = (id, done) => {
    this.props.updateTask(id, done);
  }

  handleDeleteClick = (id) => {
    this.props.deleteTask(id);
  }

  renderTasks() {
    return this.props.task.tasks.slice().reverse().map(el =>
      (<Task
        {...el}
        key={el.id}
        handleDoneClick={this.handleDoneClick}
        handleDeleteClick={this.handleDeleteClick}
      />));
  }

  render() {
    return (
      <div className="task-container">
        {this.props.task.loading ? <Spinner /> : this.renderTasks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.app.auth, task: state.app.task };
}

function mapDispatchToProps(dispatch) {
  return { dispatch, ...bindActionCreators({ ...taskActions, ...authActions }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

Main.propTypes = {
  loadTasks: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  postTask: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  task: PropTypes.object.isRequired,
};
