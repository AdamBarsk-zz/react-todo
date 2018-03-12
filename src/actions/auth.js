import { push } from 'react-router-redux';
import { fireAuth, authProvider } from '../firebase/config';
import { showToast } from './toast';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export function loginRequest() {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    fireAuth.signInWithPopup(authProvider)
      .then((response) => {
        dispatch({
          type: LOGIN_SUCCESS,
          user: response.user,
        });
        dispatch(showToast(`Welcome ${response.user.displayName}.`, 'success'));
        dispatch(push('/'));
      })
      .catch(() => {
        dispatch({ type: LOGIN_FAILURE });
        dispatch(showToast('Authentication failed.', 'error'));
      });
  };
}

export function logoutRequest() {
  return (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST });

    fireAuth.signOut()
      .then(() => {
        dispatch({ type: LOGOUT_SUCCESS });
        dispatch(showToast('Take care.', 'success'));
      })
      .catch(() => {
        dispatch({ type: LOGOUT_FAILURE });
        dispatch(showToast('Logout failed.', 'error'));
      });
  };
}

export function anonymousRequest() {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    fireAuth.signInAnonymously()
      .then((user) => {
        dispatch({
          type: LOGIN_SUCCESS,
          user,
        });
        dispatch(showToast('Welcome.', 'success'));
        dispatch(push('/'));
      })
      .catch(() => {
        dispatch({ type: LOGIN_FAILURE });
        dispatch(showToast('Authentication failed.', 'error'));
      });
  };
}
