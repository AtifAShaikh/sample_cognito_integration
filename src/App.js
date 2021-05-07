import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Success from './pages/Success';
import Verify from './pages/Verify';
import configureAmplify from './aws/config';

configureAmplify();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/']}>
          <Landing/>
        </Route>
        <Route exact path={['/signup']}>
          <Signup/>
        </Route>
        <Route exact path={'/verify/:id'}>
          <Verify/>
        </Route>
        <Route exact path={['/success']}>
          <Success/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
