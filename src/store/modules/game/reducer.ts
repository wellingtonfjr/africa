import { Reducer } from 'redux';
import produce from 'immer';
import { GameState, GameTypes, Levels } from './types'
// import history from '../../../config/history';

const INITIAL_STATE: GameState = {
  level: Levels[0],
};

const game: Reducer<GameState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GameTypes.UPDATE_LEVEL_CURRENT:
      return produce(state, draftState => {
        const level = Levels[1];
        draftState.level = level;
      });
    case GameTypes.GET_LEVEL_CURRENT:
    default:
      return state;
  }
};

export default game;
