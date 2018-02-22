import React from 'react';

const Toast = props => (
  props.toast.show &&
  <div className={`toast ${props.toast.archetype && props.toast.archetype}`}>
    <h6>{props.toast.value}</h6>
  </div>
);

export default Toast;
