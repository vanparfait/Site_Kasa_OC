import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [active, setActive] = useState(1);
  function toogle(index) {
    setActive(index);
  }
  return (
    <div className="NavBar">
      <Link
        exact
        to="/"
        onClick={() => toogle(1)}
        className={active === 1 ? "lien active-lien" : "lien"}
      >
        Accueil
      </Link>
      <Link
        to="/a-propos"
        onClick={() => toogle(2)}
        className={active === 2 ? "lien active-lien" : "lien"}
      >
        A-propos
      </Link>
    </div>
  );
};

export default NavBar;
