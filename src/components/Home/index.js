import React, { useState, useEffect } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionTeams from '../../store/modules/team/action';

import { SympleContainer } from '../../styles/globalComponentsStyles';

function Home({ setTeams, getTeams }) {
  const [timeA, setTimeA] = useState('');
  const [timeB, setTimeB] = useState('');

  useEffect(() => {
    const teams = localStorage.getItem('teams');
    if (teams) {
      setTimeA(JSON.parse(localStorage.getItem('teams'))[0]);
      setTimeB(JSON.parse(localStorage.getItem('teams'))[1]);
    }
  }, []);

  function handleChangeTeam(event) {
    const valueInput = event.target.value;
    const nameInput = event.target.name;
    if (nameInput === 'timeA') {
      setTimeA(valueInput);
    } else {
      setTimeB(valueInput);
    }
  }

  function handleSubmit() {
    setTeams([timeA, timeB]);
  }

  return (
    <>
      <h1>Home</h1>
      <SympleContainer>
        <form>
          <h2>Time A</h2>
          <input
            type="text"
            name="timeA"
            onChange={e => handleChangeTeam(e)}
            value={timeA}
          />

          <h2>Time B</h2>
          <input
            type="text"
            name="timeB"
            onChange={e => handleChangeTeam(e)}
            value={timeB}
          />

          <button type="button" onClick={handleSubmit}>
            Próximo
          </button>
        </form>
      </SympleContainer>
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionTeams, dispatch);
};

export default connect(null, mapDispatchToProps)(Home);
