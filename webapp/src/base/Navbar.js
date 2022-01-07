import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="flex justify-between bg-skin-10 p-4">
          <img src="Logo_AALTO.svg" alt="logo" />
          <div className="flex">
            <img
              src="DarkMode.svg"
              className="p-2 border-l-1 border-skin-100"
              alt="darkmode"
            />
            <img
              src="Menu.svg"
              className="p-2 border-l-1 border-skin-100"
              alt="menu-icon"
            />
          </div>
      </div>
    );
  }
}
