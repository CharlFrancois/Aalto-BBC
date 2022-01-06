import React from "react";
import axios from "axios";

export default class Navbar extends React.Component {
  state = {
    darkModeUrl: undefined,
    logoUrl: undefined,
    menuUrl: undefined,
  };

  componentDidMount() {
    axios.get(`http://localhost:1337/api/navbars?populate=*`).then((res) => {
      console.log(res.data.data[0].attributes);
      const allLogos = res.data.data[0].attributes;
      const darkModeUrl = allLogos.DarkMode.data.attributes.url;
      const logoUrl = allLogos.Logo.data.attributes.url;
      const menuUrl = allLogos.Menu.data.attributes.url;
      console.log("this is darkmode", darkModeUrl);
      this.setState({ darkModeUrl, logoUrl, menuUrl });
    });
  }

  render() {
    return (
      <div className="bg-yellow-10 border-yellow-30 z-50 fixed w-full">
        <div className="container sm:px-6 sm:py-3 md:px-8 md:py-6 flex flex-row items-center justify-between border border-yellow-30 border-b">
          <img src={`http://localhost:1337${this.state.logoUrl}`} alt="logo" />
          <div>
            <img
              src={`http://localhost:1337${this.state.darkModeUrl}`}
              alt="darkmode"
            />
            <img
              src={`http://localhost:1337${this.state.menuUrl}`}
              alt="darkmode"
            />
          </div>
        </div>
      </div>
    );
  }
}
