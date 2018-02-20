import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as todoActions from '../actions/todo';
import * as authActions from '../actions/auth';

class Main extends Component {
  // componentDidMount() {
  //   this.props.loadTodos(this.props.auth.user);
  // }
  logout = () => {
    this.props.logoutRequest();
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={(e) => { e.preventDefault(); this.props.postTodo(this.todo.value); }}>
          <input type="text" ref={(todo) => { this.todo = todo; }} />
        </form>
        <button onClick={(e) => { e.preventDefault(); this.logout(); }}>Logout</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.app.auth };
}

function mapDispatchToProps(dispatch) {
  return { dispatch, ...bindActionCreators({ ...todoActions, ...authActions }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

Main.propTypes = {
  loadTodos: PropTypes.func.isRequired,
  postTodo: PropTypes.func.isRequired,
};
