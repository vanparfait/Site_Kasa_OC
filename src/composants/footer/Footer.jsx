import React from "react";
import logo from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <img src={logo} alt="Logo, site de Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
