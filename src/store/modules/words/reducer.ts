/* eslint-disable no-case-declarations */
import { Reducer } from 'redux';
import produce from 'immer';
import { WordsState, WordsTypes } from './types'

const INITIAL_STATE: WordsState = {
  words: ['Martelo', 'Folha', 'Pão', 'Copo', 'pé', 'mão', 'cabeça'],
  playedWords: []
};

const words: Reducer<WordsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WordsTypes.UPDATE_PLAYED_WORDS:
      const playedWords = state.words.slice(0, action.data);
      // return produce(state, draftState => {
      //   draftState.words = state.words.splice(action.data, state.words.length)
      //   draftState.playedWords = 
      // })
      return {
        ...state,
        words: state.words.splice(action.data, state.words.length),
        playedWords: [...state.playedWords, ...playedWords],
      };
    case  WordsTypes.MOUNT_RANDOM_WORDS_TO_PLAYED:
      return produce(state, draftState => {
        // let newArray = [];
        let words = action.words
        console.log('words', words)
        // while (words.length !== 0) {
        //   let randomIndex = Math.floor(Math.random() * words.length);
        //   newArray.push(words[randomIndex]);
        //   words.slice(randomIndex, 1)
        // }
        draftState.words = words;
      })
    case  WordsTypes.RESET_WORDS_PLAYED:
      return produce(state, draftState => {
        draftState.playedWords = []
      })
    default:
      return state;
  }
}

export default words
