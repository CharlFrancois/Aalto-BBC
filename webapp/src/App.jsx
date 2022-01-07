import React from 'react';
import './App.css';
import SideLines from './base/SideLines';
import Navbar from './base/Navbar';
import ButtonContact from './base/ButtonContact';

function App() {
  return (
    <div className="bg-skin-10 h-full">
      <SideLines />
      <Navbar />
      <ButtonContact />
      <div className="mx-10">
        hello
      </div>
    </div>
  );
}

export default App;
