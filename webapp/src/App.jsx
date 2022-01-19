import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SideLines from './base/SideLines';
import Navbar from './base/Navbar';
import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import ArticlesPage from './views/ArticlesPage';
import ArticlePage from './views/ArticlePage';
import Footer from './base/Footer';
import Contact from './views/Contact';

function App() {
  return (
    <div className="bg-skin-10 h-full p-0 static overflow-x-hidden">
      <SideLines />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<span>Projets</span>} />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/journal" element={<ArticlesPage/>} />
        <Route path="/journal/:id" element={<ArticlePage/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <img src='button-contact.png' alt='btn-contact' className='fixed bottom-5 right-14 cursor-pointer z-20 mob:hidden' />
    </div>
  );
}

export default App;
