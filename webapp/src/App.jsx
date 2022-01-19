import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SideLines from './base/SideLines';
import Navbar from './base/Navbar';
import ButtonContact from './base/ButtonContact';

function App() {
  return (
    <div className="bg-skin-10 h-full p-0 static">
      <SideLines />
      <Navbar />
      <ButtonContact />
      <div className="absolute mx-10 mt-[102px]">
        hello encore
      </div>
      <Routes>
        <Route path="/" element={<span>Home</span>} />
        <Route path="/projects" element={<span>Projets</span>} />
        <Route path="/about" element={<span>A propos</span>} />
        <Route path="/journal" element={<span>Journal</span>} />
      </Routes>
    </div>
  );
}

export default App;
