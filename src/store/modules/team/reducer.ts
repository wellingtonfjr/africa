import { Reducer } from 'redux';
import { TeamsState, TeamsTypes } from './types'
import produce from 'immer';
import history from '../../../config/history';

const INITIAL_STATE: TeamsState = {
  teams: [],
  countTeams: 2,
  teamCurrent: false,
};

const setTeams: Reducer<TeamsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TeamsTypes.SET_TEAM:
      return produce(state, draftState => {
        const countTeams = state.countTeams;
        for (let index = 0; index < countTeams; index++) {
          const team = {
            ...draftState.teams[index],
            id: index, 
            names: action.payload[index],
            points: 0,
          };
          draftState.teams.push(team);
          localStorage.setItem(`team${index}`, JSON.stringify(team));
        }
      });
    case TeamsTypes.REDIRECT_TO_GAME:
      history.push('/preparing');
      return state;
    case TeamsTypes.CHANGE_CURRENT_TEAM:
      return {
        ...state,
        teamCurrent: !state.teamCurrent,
      };
    case TeamsTypes.UPDATE_POINTS: 
      const arrayTeam = state.teamCurrent ? 0 : 1
      return produce(state, draftState => {
        draftState.teams[arrayTeam].points = action.data;
      })
    default:
      return state;
  }
}

export default setTeams;