import history from '../../../config/history';

export function updatePlayedWords(indexPlayedWords) {
  return dispatch => {
    dispatch({
      type: '@teams/UPDATE_POINTS',
      data: indexPlayedWords,
    });
    dispatch({
      type: '@words/UPDATE_PLAYED_WORDS',
      data: indexPlayedWords,
    });
    dispatch({
      type: '@team/CHANGE_CURRENT_TEAM',
    });
    history.push('/preparing');
  };
}
