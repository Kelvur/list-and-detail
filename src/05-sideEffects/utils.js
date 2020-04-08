
export const buildSimpleSideEffect = (
  service,
  action,
  successAction,
  errorAction,
) => (...args) => (dispatch) => {
  dispatch(action.apply(null, args));
  service.apply(null, args)
    .then(response => dispatch(successAction(response.data)))
    .catch(error => dispatch(errorAction(error)));
};
