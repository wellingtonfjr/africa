
export enum TeamsTypes {
  SET_TEAM = '@team/SET_TEAM',
  GET_TEAM = '@team/GET_TEAM',
  REDIRECT_TO_GAME = '@team/REDIRECT_TO_GAME',
  CHANGE_CURRENT_TEAM = '@team/CHANGE_CURRENT_TEAM',
  UPDATE_POINTS = '@teams/UPDATE_POINTS'
}

export interface Teams {
  id: number,
  names: string,
  points: number,
}

export interface TeamsState {
  teams: Teams[],
  countTeams: number,
  teamCurrent: boolean,
}