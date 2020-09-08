import { TeamsTypes } from './types'

export const changeCurrentTeam = () => ({
  type: TeamsTypes.CHANGE_CURRENT_TEAM,
});

export const setTeams = teams => {
  return dispatch => {
    dispatch({
      type: TeamsTypes.SET_TEAM,
      payload: teams,
    });
    dispatch(changeCurrentTeam(teams));
    dispatch({ type: '@team/REDIRECT_TO_GAME' });
  };
};

export const getTeams = () => ({
  type: TeamsTypes.GET_TEAM,
});

export function updatePoints(indexPlayedWords) {
  return {
    type: TeamsTypes.UPDATE_POINTS,
    data: indexPlayedWords,
  }
}