import React from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Saved from './Saved';
import MusicForm from './MusicForm';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/saved" element={<Saved />} />
        <Route exact path="/create" element={<MusicForm />} />
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;