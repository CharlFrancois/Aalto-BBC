import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SideLines from './base/SideLines';
import Navbar from './base/Navbar';
import ButtonContact from './base/ButtonContact';
import HomePage from './views/HomePage';

function App() {
  return (
    <div className="bg-skin-10 h-full p-0 static">
      <SideLines />
      <Navbar />
      <ButtonContact />
      <Routes>
        <Route path="/" element={<span>Home</span>} />
        <Route path="/projects" element={<span>Projets</span>} />
        <Route path="/about" element={<span>A propos</span>} />
        <Route path="/journal" element={<span>Journal</span>} />
      </Routes>
      <HomePage />
    </div>
  );
}

export default App;
