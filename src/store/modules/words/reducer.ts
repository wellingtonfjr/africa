/* eslint-disable no-case-declarations */
import { Reducer } from 'redux';
import { WordsState, WordsTypes } from './types'

const INITIAL_STATE: WordsState = {
  words: ['Martelo', 'Folha', 'Pão', 'Copo'],
  playedWords: []
};

const words: Reducer<WordsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WordsTypes.UPDATE_PLAYED_WORDS:
      const playedWords = state.words.slice(0, action.data);
      
      return {
        ...state,
        words: state.words.splice(action.data, state.words.length),
        playedWords: [...state.playedWords, ...playedWords],
      };
    default:
      return state;
  }
}

export default words
