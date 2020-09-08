import React from 'react';
import { useSelector } from 'react-redux';

import { getLevelCurrent } from '../../store/modules/game/selectors'
import { getTeamsCurrent } from '../../store/modules/team/selectors'

import history from '../../config/history';

function Preparing() {
  const teamCurrent = useSelector(getTeamsCurrent);
  const levelCurrent = useSelector(getLevelCurrent);

  return (
    <>
      <h1>{levelCurrent}</h1>
      <div>
        <span>{`Time ${teamCurrent + 1}`}</span>
      </div>

      <button type="button" onClick={() => history.push('/play')}>
        Começar Jogo
      </button>
    </>
  );
}

Preparing.defaultProps = {
  teamCurrent: 0,
  teams: {},
};

export default Preparing;
