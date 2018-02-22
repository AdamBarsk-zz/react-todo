import fire from '../firebase/config';
import { showToast } from './toast';

export const LOAD_TASKS = 'LOAD_TASKS';
export const LOAD_TASKS_SUCCESS = 'LOAD_TASKS_SUCCESS';
export const LOAD_TASKS_FAILURE = 'LOAD_TASKS_FAILURE';

export const POST_TASK = 'POST_TASK';
export const POST_TASK_SUCCESS = 'POST_TASK_SUCCESS';
export const POST_TASK_FAILURE = 'POST_TASK_FAILURE';

export const UPDATE_TASK = 'UPDATE_TASK';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_FAILURE = 'UPDATE_TASK_FAILURE';

export const DELETE_TASK = 'DELETE_TASK';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE';

export const TASK_INPUT = 'TASK_INPUT';

export function loadTasks(uid) {
  return (dispatch) => {
    dispatch({ type: LOAD_TASKS });

    fire.database().ref('tasks').orderByChild('uid').equalTo(uid)
      .on('value', (snapshot) => {
        const tasks = [];

        snapshot.forEach((childSnapshot) => {
          const task = childSnapshot.val();
          task.id = childSnapshot.key;
          tasks.push(task);
        });

        dispatch({
          type: LOAD_TASKS_SUCCESS,
          tasks,
        });
      });
  };
}

export function postTask(task, uid) {
  return (dispatch) => {
    dispatch({ type: POST_TASK });

    fire.database().ref('tasks').push({
      task,
      done: false,
      uid,
    })
      .then(() => {
        dispatch({ type: POST_TASK_SUCCESS });
        dispatch(showToast('Task added.', 'success'));
      })
      .catch(() => {
        dispatch({ type: POST_TASK_FAILURE });
        dispatch(showToast('Firebase is burning', 'error'));
      });
  };
}

export function updateTask(id, done) {
  return (dispatch) => {
    dispatch({ type: UPDATE_TASK });

    fire.database().ref(`tasks/${id}`).update({
      done: !done,
    })
      .then(() => {
        dispatch({ type: UPDATE_TASK_SUCCESS });
        dispatch(showToast('Task updated.', 'success'));
      })
      .catch(() => {
        dispatch({ type: UPDATE_TASK_FAILURE });
        dispatch(showToast('Firebase is burning', 'error'));
      });
  };
}

export function deleteTask(id) {
  return (dispatch) => {
    dispatch({ type: DELETE_TASK });

    fire.database().ref(`tasks/${id}`).remove()
      .then(() => {
        dispatch({ type: DELETE_TASK_SUCCESS });
        dispatch(showToast('Task deleted.', 'success'));
      })
      .catch(() => {
        dispatch({ type: DELETE_TASK_FAILURE });
        dispatch(showToast('Firebase is burning', 'error'));
      });
  };
}


export function taskInput(input) {
  return (dispatch) => {
    dispatch({
      type: TASK_INPUT,
      input,
    });
  };
}
