import * as taskActions from '../actions/task';
import { updateObject } from '../helpers/functions';

const initialState = {
  input: '',
  loading: false,
  tasks: [],
  failure: false,
};

const task = (state = initialState, action) => {
  switch (action.type) {
    case taskActions.LOAD_TASKS:
      return updateObject(state, { loading: true });
    case taskActions.LOAD_TASKS_SUCCESS:
      return updateObject(state, {
        tasks: action.tasks,
        loading: false,
      });
    case taskActions.LOAD_TASKS_FAILURE:
      return updateObject(state, { failure: true });
    case taskActions.POST_TASK_SUCCESS:
      return updateObject(state, { input: '' });
    case taskActions.TASK_INPUT:
      return updateObject(state, { input: action.input });
    default:
      return state;
  }
};

export default task;
