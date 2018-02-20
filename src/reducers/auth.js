import * as authActions from '../actions/auth';

const initialState = {};

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case authActions.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case authActions.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case authActions.LOGIN_FAILURE:
      return {};
    case authActions.LOGOUT_REQUEST:
      return updateObject(state, { loggingOut: true });
    case authActions.LOGOUT_SUCCESS:
      return {};
    case authActions.LOGOUT_FAILURE:
      return state;
    default:
      return state;
  }
};

export default auth;
