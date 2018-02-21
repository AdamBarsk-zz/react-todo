import * as todoActions from '../actions/todo';
import { updateObject } from '../helpers/functions';

const initialState = {
  input: '',
  loading: false,
  todos: [],
  failure: false,
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case todoActions.LOAD_TODOS:
      return updateObject(state, { loading: true });
    case todoActions.LOAD_TODOS_SUCCESS:
      return updateObject(state, {
        todos: action.todos,
        loading: false,
      });
    case todoActions.LOAD_TODOS_FAILURE:
      return updateObject(state, { failure: true });
    case todoActions.POST_TODO_SUCCESS:
      return updateObject(state, { input: '' });
    case todoActions.TODO_INPUT:
      return updateObject(state, { input: action.input });
    default:
      return state;
  }
};

export default todo;
