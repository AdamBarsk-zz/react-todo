import React from 'react';
import PropTypes from 'prop-types';

const Input = props => (
  <div className="header-item">
    <form action="" onSubmit={(e) => { e.preventDefault(); props.submitTask(); }}>
      <input type="text" value={props.task.input} onChange={props.taskInputChanged} />
      <button>
        <i className="fal fa-paper-plane" />
      </button>
    </form>
  </div>
);

Input.propTypes = {
  submitTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  taskInputChanged: PropTypes.func.isRequired,
};

export default Input;
