import { createSelector } from 'reselect'

export const getPlayedWordsSelector = state => state.words.playedWords

export const getPlayedWordsSelectorReturn = createSelector(
  getPlayedWordsSelector,
  playedWords => {
    return playedWords
  },
)

export const getWordsSelector = state => {
  return state.words.words
}