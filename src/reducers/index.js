import { combineReducers } from 'redux';
import auth from './auth';
import task from './task';
import toast from './toast';


const appReducer = combineReducers({
  auth,
  task,
  toast,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    const { routing } = state;
    state = { routing };
  }

  return appReducer(state, action);
};

export default rootReducer;
