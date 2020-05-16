import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import history from '../../config/history';

function Preparing({ teams, teamCurrent }) {
  return (
    <>
      <h1>Prepare-se - MÍMICA</h1>
      <div>
        <span>Time {teamCurrent + 1}</span>
      </div>

      <button type="button" onClick={() => history.push('/play')}>
        Começar Jogo
      </button>
    </>
  );
}

const mapStateToProps = state => ({
  teams: state.teams,
  teamCurrent: state.teams.teamCurrent,
});

Preparing.propTypes = {
  teamCurrent: PropTypes.number,
  teams: PropTypes.shape({
    teamA: PropTypes.shape({
      name: PropTypes.string,
    }),

    teamB: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

Preparing.defaultProps = {
  teamCurrent: 0,
  teams: {},
};

export default connect(mapStateToProps)(Preparing);
