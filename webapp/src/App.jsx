import React from 'react';
import './App.css';
import SideLines from './base/SideLines';
import Navbar from './base/Navbar';
import ButtonContact from './base/ButtonContact';
import ArticlePage from './views/ArticlePage';

function App() {
  return (
    <div className="bg-skin-10 h-full">
      <SideLines />
      <Navbar />
      <ButtonContact />
      <ArticlePage />
    </div>
  );
}

export default App;
