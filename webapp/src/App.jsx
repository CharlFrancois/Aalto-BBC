import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SideLines from './base/SideLines';
import Navbar from './base/Navbar';
import HomePage from './views/HomePage';
import Projects from './views/Projects';
import Project from './views/Project'

function App() {
  return (
    <div className="bg-skin-10 h-full p-0 static overflow-x-hidden">
      <SideLines />
      <Navbar />
      <div className="mt-[102px] w-full">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<span>A propos</span>} />
        <Route path="/journal" element={<span>Journal</span>} />
        <Route path="/project/" element={<Project />} />
      </Routes>
      <img src='button-contact.png' className='fixed bottom-5 right-14 cursor-pointer' />
      </div>
     
    </div>
  );
}

export default App;
