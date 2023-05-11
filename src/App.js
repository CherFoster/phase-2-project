import React from 'react';
import MusicContainer from './MusicContainer';
import NavBar from './NavBar';
import Home from './Home';
import NewForm from './MusicForm';
import MusicForm from './MusicForm';


function App() {
  return (
    <div>
      <Home />
      <NavBar />
      <MusicForm />


      <MusicContainer />
    </div>
  );
}

export default App;