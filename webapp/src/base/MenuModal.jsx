import { React, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Link } from 'react-router-dom';

export default function MenuModal(toggleModal) {
  const [openNav, setOpenNav] = useState(true);
  return (
    <Dialog open={openNav} onClose={() => toggleModal}>
      <Dialog.Overlay className="absolute flex bg-skin-10 h-[150vh] w-screen p-0 top-[102px]" />
      <div className="flex fixed bottom-0 items-center content-end  mx-10">
        <Link to="/projects" onClick={() => setOpenNav(false)}>
          <div className=" font-normal  leading-[135px] -rotate-90 mb-40 -mr-0 font-gallery text-[100px] outline-title mt-0 py-20 border-b-2 border-skin-20">
            Projets
          </div>
        </Link>
        <Link to="/about" onClick={() => setOpenNav(false)}>
          <div className=" font-normal  leading-[135px] -rotate-90 mb-40 -mr-0 font-gallery text-[100px] outline-title mt-0 py-20 border-b-2 border-skin-20">
            <button type="button">A propos</button>
          </div>
        </Link>
        <Link to="/journal" onClick={() => setOpenNav(false)}>
          <div className=" font-normal  leading-[135px] -rotate-90 mb-40 -mr-0 font-gallery text-[100px] outline-title py-20 border-b-2 border-skin-20 ">
            Journal
          </div>
        </Link>
      </div>
    </Dialog>
  );
}
