import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SideLines from './base/SideLines';
import Navbar from './base/Navbar';
import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import ArticlesPage from './views/ArticlesPage';
import ArticlePage from './views/ArticlePage';
import Footer from './base/Footer';
import Contact from './views/Contact';
import Projects from './views/Projects';
import Project from './views/Project'

function App() {
  return (
    <div className="bg-skin-10 dark:bg-dark h-full p-0 static overflow-x-hidden w-full">
      <SideLines />
      <Navbar />
      {/* <div className="mt-[102px] w-full"> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/journal" element={<ArticlesPage/>} />
        <Route path="/journal/:id" element={<ArticlePage/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Link to="/contact" className="">
        <img src='button-contact.png' alt='btn-contact' className='fixed bottom-5 right-14 cursor-pointer z-20 mob:hidden dark:hidden' />
        <img src='buttonContactWhite.png' alt='btn-contact' className='fixed bottom-5 right-14 cursor-pointer z-20 mob:hidden hidden dark:block' />
      </Link>
    </div>
  );
}

export default App;
