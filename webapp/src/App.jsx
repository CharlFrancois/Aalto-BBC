import React from 'react';
import './App.css';
import SideLines from './base/SideLines';
import Navbar from './base/Navbar';
import HomePage from './views/HomePage';

function App() {
  return (
    <div className="bg-skin-10 h-full">
      <SideLines />
      <Navbar />
      <img src='button-contact.png' className='fixed bottom-5 right-14 cursor-pointer' />
      <HomePage />
    </div>
  );
}

export default App;
