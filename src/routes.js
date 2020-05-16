import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Preparing from './components/Preparing';
import Play from './components/Play';
import Home from './components/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/Preparing" exact component={Preparing} />
      <Route path="/Play" exact component={Play} />
      <Route path="/" component={Home} />
    </Switch>
  );
}
