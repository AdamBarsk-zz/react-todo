import axios from 'axios';
import fire, { fireId } from '../firebase/config';
import { push } from 'react-router-redux';

export const LOAD_TODOS = 'LOAD_TODOS';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';

export const POST_TODO = 'POST_TODO';
export const POST_TODO_SUCCESS = 'POST_TODO_SUCCESS';
export const POST_TODO_FAILURE = 'POST_TODO_FAILURE';

export function loadTodos() {
  return (dispatch) => {
    dispatch({ type: LOAD_TODOS });
  };
}

export function postTodo(task) {
  return (dispatch) => {
    dispatch({ type: POST_TODO });

    fire.database().ref('todos').push({
      task,
      done: false,
      uid: fireId(),
    })
      .then(() => {
        dispatch({ type: POST_TODO_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: POST_TODO_FAILURE });
      });
  };
}
