import React from 'react';
import PropTypes from 'prop-types';

const Todo = props => (
  <div className="todo-item">
    <div className="todo-task-container">
      <i className="fal fa-angle-double-right" />
      <h6>{props.task}</h6>
    </div>
    <div className="todo-action-container">
      <button
        className={props.done ? 'check done fa-2x' : 'check fa-2x'}
        onClick={() => props.handleDoneClick(props.id, props.done)}
      >
        <i className="fal fa-check-circle" />
      </button>
      <button
        className="delete fa-2x"
        onClick={() => props.handleDeleteClick(props.id)}
      >
        <i className="fal fa-ban" />
      </button>
    </div>
  </div>
);

Todo.propTypes = {
  handleDeleteClick: PropTypes.func.isRequired,
  handleDoneClick: PropTypes.func.isRequired,
  task: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Todo;
