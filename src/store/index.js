import { createStore, applyMiddleware } from 'redux';

import promise from 'redux-promise';
import thunk from 'redux-thunk';

import rootReducer from './modules/rootReducer';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(thunk, promise)(createStore)(
  rootReducer,
  devTools
);

// const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
