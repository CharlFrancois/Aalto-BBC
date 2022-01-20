import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SideLines from './base/SideLines';
import Navbar from './base/Navbar';
import HomePage from './views/HomePage';
import Contact from './views/Contact';
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
        <Route path="/journal" element={<span>Journal</span>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Link to="/contact" className="">
        <img src='button-contact.png' alt='btn-contact' className='fixed bottom-5 right-14 cursor-pointer z-20 mob:hidden' />
      </Link>
    </div>
  );
}

export default App;
