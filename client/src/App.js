import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Notes from './components/Notes';
import Note from './components/Note';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/notes" component={Notes} />
      <Route exact path='/notes/:id' component={Note} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
