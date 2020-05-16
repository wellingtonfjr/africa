export const changeCurrentTeam = () => ({
  type: '@team/CHANGE_CURRENT_TEAM',
});

export const setTeams = teams => {
  return dispatch => {
    dispatch({
      type: '@team/SET_TEAM',
      payload: teams,
    });
    dispatch(changeCurrentTeam(teams));
    dispatch({ type: '@team/REDIRECT_TO_GAME' });
  };
};

export const getTeams = () => ({
  type: '@team/GET_TEAM',
});
