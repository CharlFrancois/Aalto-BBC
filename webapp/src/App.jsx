import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SideLines from './base/SideLines';
import Navbar from './base/Navbar';
import HomePage from './views/HomePage';

function App() {
  return (
    <div className="bg-skin-10 h-full p-0 static">
      <SideLines />
      <Navbar />
      <Routes>
        <Route path="/" element={<span>Home</span>} />
        <Route path="/projects" element={<span>Projets</span>} />
        <Route path="/about" element={<span>A propos</span>} />
        <Route path="/journal" element={<span>Journal</span>} />
      </Routes>
      <img src='button-contact.png' className='fixed bottom-5 right-14 cursor-pointer' />
      <HomePage />
    </div>
  );
}

export default App;
