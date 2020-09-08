import { combineReducers } from 'redux';

import teams from './team/reducer';
import words from './words/reducer';
import game from './game/reducer'

const rootReducer = combineReducers({
  teams,
  words,
  game
});

export default rootReducer;
