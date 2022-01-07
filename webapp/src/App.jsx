import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './base/Navbar';
import ButtonContact from './base/ButtonContact';

function App() {
  return (
    <div className="bg-skin-10">
      <Navbar />
      <ButtonContact />
    </div>
  );
}

export default App;
