import React from 'react';

import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import history from './config/history';

import Routes from './routes';

import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    </>
  );
}

export default App;
