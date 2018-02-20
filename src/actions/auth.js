import { push } from 'react-router-redux';
import { fireAuth, authProvider } from '../firebase/config';

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

        dispatch(push('/'));
      })
      .catch(() => {
        dispatch({ type: LOGIN_FAILURE });
      });
  };
}

export function logoutRequest() {
  return (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST });

    fireAuth.signOut()
      .then(() => {
        dispatch({ type: LOGOUT_SUCCESS });
        // dispatch(push('/login'));
      })
      .catch(() => {
        dispatch({ type: LOGOUT_FAILURE });
      });
  };
}
