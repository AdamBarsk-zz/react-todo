import fire from '../firebase/config';

export const LOAD_TODOS = 'LOAD_TODOS';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';

export const POST_TODO = 'POST_TODO';
export const POST_TODO_SUCCESS = 'POST_TODO_SUCCESS';
export const POST_TODO_FAILURE = 'POST_TODO_FAILURE';

export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE';

export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';

export const TODO_INPUT = 'TODO_INPUT';

export function loadTodos(uid) {
  return (dispatch) => {
    dispatch({ type: LOAD_TODOS });

    fire.database().ref('todos').orderByChild('uid').equalTo(uid)
      .on('value', (snapshot) => {
        const todos = [];

        snapshot.forEach((childSnapshot) => {
          const todo = childSnapshot.val();
          todo.id = childSnapshot.key;
          todos.push(todo);
        });

        dispatch({
          type: LOAD_TODOS_SUCCESS,
          todos,
        });
      });
  };
}

export function postTodo(task, uid) {
  return (dispatch) => {
    dispatch({ type: POST_TODO });

    fire.database().ref('todos').push({
      task,
      done: false,
      uid,
    })
      .then(() => {
        dispatch({ type: POST_TODO_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: POST_TODO_FAILURE });
      });
  };
}

export function updateTodo(id, done) {
  return (dispatch) => {
    dispatch({ type: UPDATE_TODO });

    fire.database().ref(`todos/${id}`).update({
      done: !done,
    })
      .then(() => {
        dispatch({ type: UPDATE_TODO_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: UPDATE_TODO_FAILURE });
      });
  };
}

export function deleteTodo(id) {
  return (dispatch) => {
    dispatch({ type: DELETE_TODO });

    fire.database().ref(`todos/${id}`).remove()
      .then(() => {
        dispatch({ type: DELETE_TODO_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: DELETE_TODO_FAILURE });
      });
  };
}


export function todoInput(input) {
  return (dispatch) => {
    dispatch({
      type: TODO_INPUT,
      input,
    });
  };
}
