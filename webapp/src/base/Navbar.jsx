import { React, useState } from 'react';
import MenuModal from './MenuModal';

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const toggleModal = () => {
    setOpenNav(!openNav);
  };
  return (
    <>
      <div className="absolute z-10 w-full bg-skin-10 divide-x divide-skin-20 border-b border-skin-20 h-[102px] ">
        <div className="flex justify-between mx-10 h-full">
          <img src="Logo_AALTO.svg" alt="logo" className="p-7" />
          <div className="flex divide-x divide-skin-20">
            <button type="button" onClick={() => setOpenNav(!openNav)}>
              <img src="DarkMode.svg" className="p-2 px-8" alt="darkmode" />
            </button>
            <button type="button" onClick={toggleModal}>
              <img src="Menu.svg" className="p-2 px-8" alt="menu-icon" />
            </button>
          </div>
        </div>

      </div>
      {openNav && <MenuModal openNav={openNav} toggleModal={toggleModal} />}
    </>
  );
}
