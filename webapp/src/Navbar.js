import React from "react";
import "./Navbar.css"

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="flex justify-between">
          <img src="Logo_AALTO.svg" alt="logo" />
          <div className="">
            <img
              src="DarkMode.svg"
              className="icon"
              alt="darkmode"
            />
            <img
              src="Menu.svg"
              className="icon"
              alt="menu-icon"
            />
          </div>
      </div>
    );
  }
}
