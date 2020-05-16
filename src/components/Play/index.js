import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ActionWords from '../../store/modules/words/actions';

function Play({ words, updatePlayedWords }) {
  const [indexCurrentWord, setIndexCurrentWord] = useState(0);

  function nextWord() {
    setIndexCurrentWord(indexCurrentWord + 1);
  }

  function renderWord() {
    return <span>{words[indexCurrentWord]}</span>;
  }

  function finishTime() {
    updatePlayedWords(indexCurrentWord);
    setIndexCurrentWord(0);
  }

  return (
    <>
      <h1>Play</h1>
      {renderWord()}
      <button type="button" onClick={nextWord}>
        Próxima
      </button>

      <button type="button" onClick={finishTime}>
        Finish
      </button>
    </>
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

const mapStateToProps = state => ({
  words: state.words.words,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionWords, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Play);
