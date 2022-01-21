import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { ThemeContext } from '../utils/ThemeContext';

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const { theme, setTheme } = React.useContext(ThemeContext);
  const toggleModal = () => {
    setOpenNav(!openNav);
  };
  return (
    <>
      <div className="absolute z-10 w-full bg-skin-10 divide-x divide-skin-20 border-b border-skin-20 h-[102px] dark:bg-dark">
        <div className="flex justify-between mx-10 h-full">
          <Link to="/" className="p-7" onClick={() => setOpenNav(false)}>
            <img src="Logo_AALTO.svg" alt="logo" className="w-full dark:hidden" />
            <img src="AAltoWhite.png" alt="logo" className="w-full hidden dark:block" />
          </Link>
          <div className="flex divide-x divide-skin-20">
            <button type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              <img src="DarkMode.svg" className="p-2 px-8 dark:hidden" alt="darkmode" />
              <img src="EllipseWhite.png" className="p-2 px-8 hidden dark:block" alt="darkmode" />
            </button>
            <button type="button" onClick={toggleModal}>
              {!openNav && <>
                <img src="Menu.svg" className="p-2 px-8 dark:hidden" alt="menu-icon" />
                <img src="BurgerWhite.png" className="p-2 px-8 hidden dark:block" alt="menu-icon" />
              </>}
              {openNav && <>
                <img src="XDark.png" className="p-2 px-8 dark:hidden" alt="menu-icon" />
                <img src="XWhite.png" className="p-2 px-8 hidden dark:block" alt="menu-icon" />
              </>}
            </button>
          </div>
        </div>

      </div>
      <Dialog open={openNav} onClose={() => toggleModal}>
        <Dialog.Overlay className="absolute flex bg-skin-10 dark:bg-dark dark:text-white h-[150vh] w-screen p-0 top-[102px]" />
        <div className="flex fixed bottom-0 items-center content-end  mx-10">
          <Link to="/projects" onClick={() => setOpenNav(false)}>
            <div className=" font-normal  leading-[135px] -rotate-90 mb-40 -mr-0 font-gallery text-[100px] 
            outline-title dark:dark-outline-title mt-0 py-20 border-b-2 border-skin-20">
              Projets
            </div>
          </Link>
          <Link to="/about" onClick={() => setOpenNav(false)}>
            <div className=" font-normal  leading-[135px] -rotate-90 mb-40 -mr-0 font-gallery text-[100px] 
            outline-title dark:dark-outline-title mt-0 py-20 border-b-2 border-skin-20">
              <button type="button">A propos</button>
            </div>
          </Link>
          <Link to="/journal" onClick={() => setOpenNav(false)}>
            <div className=" font-normal  leading-[135px] -rotate-90 mb-40 -mr-0 font-gallery text-[100px] 
            outline-title dark:dark-outline-title py-20 border-b-2 border-skin-20 ">
              Journal
            </div>
          </Link>
          <div className="flex">
            <div className="font-normal ml-10 dark:text-white w-full mb-40">
              <div className="flex uppercase justify-between w-full mb-40">
                <div className="mr-40">Instagram</div>
                <div>LinkedIn</div>
              </div>
              <div className="flex flex-col">
                <div className="mt-20 uppercase">Email</div>
                <div className="">agence@torres-architectes.com</div>
                <div className="mt-20 uppercase">Appelez-nous</div>
                <div className="">+33 69 85 65 78</div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
