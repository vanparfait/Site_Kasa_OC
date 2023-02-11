import React from "react";
import logo from "../../images/logo.png";
import NavBar from "../navBar/NavBar";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} alt="KASA" />
      </div>
      <div className="Navbar">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
