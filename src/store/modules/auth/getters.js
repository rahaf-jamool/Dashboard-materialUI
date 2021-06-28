export const authenticated = (state) => {
  return state.token && state.user;
};
export const user = (state) => {
  return state.user;
};
