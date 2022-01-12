import React from 'react';
import './App.css';
import SideLines from './base/SideLines';
import Navbar from './base/Navbar';
import ButtonContact from './base/ButtonContact';
import HomePage from './views/HomePage';

function App() {
  return (
    <div className="bg-skin-10 h-full">
      <SideLines />
      <Navbar />
      <ButtonContact />
      <HomePage />
    </div>
  );
}

export default App;
