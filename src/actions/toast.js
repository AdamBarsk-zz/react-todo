export const SHOW_TOAST = 'SHOW_TOAST';
export const HIDE_TOAST = 'HIDE_TOAST';


export function hideToast() {
  return (dispatch) => {
    dispatch({ type: HIDE_TOAST });
  };
}

export function showToast(value, archetype) {
  return (dispatch) => {
    dispatch({
      type: SHOW_TOAST,
      archetype,
      value,
    });
    setTimeout(() => dispatch(hideToast()), 3000);
  };
}
