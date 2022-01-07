import React from 'react';

export default function Navbar() {
  return (
    <div className="mx-10 flex justify-between bg-skin-10 divide-x divide-skin-20 border-b border-skin-20">
      <img src="Logo_AALTO.svg" alt="logo" className="p-7" />
      <div className="flex divide-x divide-skin-20">
        <img src="DarkMode.svg" className="p-2 px-8" alt="darkmode" />
        <img src="Menu.svg" className="p-2 px-8" alt="menu-icon" />
      </div>
    </div>
  );
}
