import React from "react";
import logo from "../../assets/favicon-192.png";
import "./header.css";

const Header = () => {
    return (
      <header className="header">
          <h2>Astronomy Picture of the Day</h2>
          <img className="logo" src={logo} alt="NASA logo" />
      </header>
    );
}

export default Header;