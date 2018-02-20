import { combineReducers } from 'redux';
import auth from './auth';
import todo from './todo';


const appReducer = combineReducers({
  auth,
  todo,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    const { routing } = state;
    state = { routing };
  }

  return appReducer(state, action);
};

export default rootReducer;
