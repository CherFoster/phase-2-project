import React from 'react';
import MusicContainer from './MusicContainer';
import NavBar from './NavBar';
import Home from './Home';
import NewForm from './NewForm';


function App() {
  return (
    <div>
      <Home />
      <NavBar />

      <MusicContainer />
    </div>
  );
}

export default App;