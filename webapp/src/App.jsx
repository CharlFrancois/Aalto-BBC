import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SideLines from './base/SideLines';
import Navbar from './base/Navbar';
import HomePage from './views/HomePage';
import ArticlesPage from './views/ArticlesPage';
import ArticlePage from './views/ArticlePage';
import Footer from './base/Footer';


function App() {
  return (
    <div className="bg-skin-10 h-full p-0 static overflow-x-hidden">
      <SideLines />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<span>Projets</span>} />
        <Route path="/about" element={<span>A propos</span>} />
        <Route path="/journal" element={<ArticlesPage/>} />
        <Route path="/journal/:id" element={<ArticlePage/>} />
      </Routes>
      <img src='button-contact.png' className='fixed bottom-5 right-14 cursor-pointer' />
      <Footer />
    </div>
  );
}

export default App;
