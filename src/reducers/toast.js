import * as toastActions from '../actions/toast';
import { updateObject } from '../helpers/functions';

const initialState = {
  show: false,
  archetype: '',
  value: '',
};

const toast = (state = initialState, action) => {
  switch (action.type) {
    case toastActions.SHOW_TOAST:
      return updateObject(state, { show: true, archetype: action.archetype, value: action.value });
    case toastActions.HIDE_TOAST:
      return updateObject(state, initialState);
    default:
      return state;
  }
};

export default toast;
