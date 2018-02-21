import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as todoActions from '../actions/todo';
import * as authActions from '../actions/auth';

import Todo from '../components/Todo';

class Main extends Component {
  componentWillMount() {
    this.props.loadTodos(this.props.auth.user.uid);
  }

  handleDoneClick = (id, done) => {
    this.props.updateTodo(id, done);
  }

  handleDeleteClick = (id) => {
    this.props.deleteTodo(id);
  }

  renderTodos() {
    return this.props.todo.todos.slice().reverse().map(el =>
      (<Todo
        {...el}
        key={el.id}
        handleDoneClick={this.handleDoneClick}
        handleDeleteClick={this.handleDeleteClick}
      />));
  }

  render() {
    return (
      <div className="main-container">
        <div className="todo-container">
          {this.props.todo.todos ? this.renderTodos() : 'Loading'}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.app.auth, todo: state.app.todo };
}

function mapDispatchToProps(dispatch) {
  return { dispatch, ...bindActionCreators({ ...todoActions, ...authActions }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

Main.propTypes = {
  loadTodos: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  postTodo: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
};
