import * as todoActions from '../actions/todo';

const initialState = {};

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

const todo = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todo;