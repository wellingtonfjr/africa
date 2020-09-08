import { WordsTypes } from './types'
import history from '../../../config/history';
import { getPlayedWordsSelector } from './selectors'


// export function updatePlayedWords(indexPlayedWords) {
//   return dispatch => {
//     dispatch({
//       type: '@teams/UPDATE_POINTS',
//       data: indexPlayedWords,
//     });
//     dispatch({
//       type: '@words/UPDATE_PLAYED_WORDS',
//       data: indexPlayedWords,
//     });
//     dispatch({
//       type: '@team/CHANGE_CURRENT_TEAM',
//     });
//     history.push('/preparing');
//   };
// }

export function updatePlayedWords(indexPlayedWords) {
  return {
    type: '@words/UPDATE_PLAYED_WORDS',
    data: indexPlayedWords,
  }
}

export function finishTime(indexPlayedWords) {
  return {
    type: '@words/UPDATE_PLAYED_WORDS',
    data: indexPlayedWords,
  }
}

export const mountRandomWordsToPlay = () => async (dispatch, getState) =>{
  const state = getState()
  const words = getPlayedWordsSelector(state)

  dispatch({
    type: WordsTypes.MOUNT_RANDOM_WORDS_TO_PLAYED,
    words: words
  })
}

export function resetWordsPlayed(words) {
  return {
    type: WordsTypes.RESET_WORDS_PLAYED
  }
}
