import React from 'react';

export default function Navbar() {
  return (
    <div className="flex justify-between bg-skin-10 p-4 divide-x divide-gray-200">
      <img src="Logo_AALTO.svg" alt="logo" />
      <div className="flex divide-x divide-gray-200">
        <img src="DarkMode.svg" className="p-2" alt="darkmode" />
        <img src="Menu.svg" className="p-2" alt="menu-icon" />
      </div>
    </div>
  );
}
