import React from 'react';
import PropTypes from 'prop-types';

const Input = props => (
  <div className="header-item">
    <form action="" onSubmit={(e) => { e.preventDefault(); props.submitTodo(); }}>
      <input type="text" value={props.todo.input} onChange={props.todoInputChanged} />
    </form>
  </div>
);

Input.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
  todoInputChanged: PropTypes.func.isRequired,
};

export default Input;
