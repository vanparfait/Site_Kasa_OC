import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink exact to="/" className="lien" activeClassName="active">
        Accueil
      </NavLink>
      <NavLink to="/a-propos" className="lien" activeClassName="active">
        A-propos
      </NavLink>
    </div>
  );
};

export default NavBar;
