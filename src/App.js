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
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/saved" element={<Saved />} />
        <Route exact path="/create" element={<MusicForm />} />
        <Route exact path="/" element={<Home />} />
        <Route path='*' element={<h1>404 not found</h1>} />
      </Routes>

    </div>
  );
}

export default App;