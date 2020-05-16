import { combineReducers } from 'redux';

import teams from './team/reducer';
import words from './words/reducer';

const rootReducer = combineReducers({
  teams,
  words,
});

export default rootReducer;
