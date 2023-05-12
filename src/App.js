import React from 'react';
import MusicContainer from './MusicContainer';
import NavBar from './NavBar';
import Banner from './Banner';
import NewForm from './MusicForm';
import MusicForm from './MusicForm';


function App() {
  return (
    <div>
      <Banner />
      <NavBar />
      <MusicForm />


      <MusicContainer />
    </div>
  );
}

export default App;