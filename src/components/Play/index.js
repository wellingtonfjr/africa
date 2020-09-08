import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

import { connect } from 'react-redux';
import history from '../../config/history';

import * as ActionWords from '../../store/modules/words/actions';
import * as ActionGame from '../../store/modules/game/action';
import * as ActionTeams from '../../store/modules/team/action';
import { getWordsSelector } from '../../store/modules/words/selectors'

function Play({
  updatePlayedWords,
  updatePoints,
  updateWords,
  updateLevel,
  mountRandomWordsToPlay,
  resetWordsPlayed,
  changeCurrentTeam
}) {
  
  const words = useSelector(getWordsSelector)
  const [indexCurrentWord, setIndexCurrentWord] = useState(0);

  const nextWord = () => {
    setIndexCurrentWord(indexCurrentWord + 1)
  }
  useEffect(
    () => {
      if(indexCurrentWord && indexCurrentWord >= words.length) {
        finishTime()
        
        mountRandomWordsToPlay()
        updateLevel()
        resetWordsPlayed()
        history.push('/preparing')
      }
    },
    [indexCurrentWord],
  );

  const finishTime = () => {
    if(indexCurrentWord){
      updatePoints(indexCurrentWord)
      updatePlayedWords(indexCurrentWord)
      changeCurrentTeam()
      setIndexCurrentWord(0);
      // history.push('/preparing')
    }
  }

  const renderWord = () => {
    return <span>{words[indexCurrentWord]}</span>;
  }

  return (
    <div>
      <h1>Play</h1>
      {renderWord()}
      <button type="button" onClick={nextWord}>
        Próxima
      </button>

      <button type="button" onClick={finishTime}>
        Finish
      </button>
    </div>
  );
}

Play.propTypes = {
  words: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
  updatePlayedWords: PropTypes.func,
};

Play.defaultProps = {
  words: [],
  updatePlayedWords: () => null,
};

const mapDispatchToProps = {...ActionWords, ...ActionGame, ...ActionTeams }

export default connect(null, mapDispatchToProps)(Play);
