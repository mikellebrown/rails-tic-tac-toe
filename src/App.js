import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import "./App.css";

function App() {
  return(
  <>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/game' component={Game} />
   
    </Switch>
</>
  )
};

export default App;
