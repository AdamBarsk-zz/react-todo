import * as authActions from '../actions/auth';
import { updateObject } from '../helpers/functions';

const initialState = {
  loggingIn: false,
  loggedIn: false,
  loggingOut: false,
  user: {},
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case authActions.LOGIN_REQUEST:
      return updateObject(state, {
        loggingIn: true,
      });
    case authActions.LOGIN_SUCCESS:
      return updateObject(state, {
        loggingIn: false,
        loggedIn: true,
        user: action.user,
      });
    case authActions.LOGIN_FAILURE:
      return initialState;
    case authActions.LOGOUT_REQUEST:
      return updateObject(state, {
        loggingOut: true,
      });
    case authActions.LOGOUT_SUCCESS:
      return initialState;
    case authActions.LOGOUT_FAILURE:
      return state;
    default:
      return state;
  }
};

export default auth;
