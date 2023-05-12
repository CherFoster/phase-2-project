import React from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import MusicContainer from './MusicContainer';
import MusicForm from './MusicForm';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/saved" element={<MusicContainer />} />
        <Route exact path="/create" element={<MusicForm />} />
        <Route exact path="/" element={<Home />} />
        <Route path='*' element={<h1>404 not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;