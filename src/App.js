import React from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import NewForm from './MusicForm';
import MusicForm from './MusicForm';


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <MusicForm />

    </div>
  );
}

export default App;