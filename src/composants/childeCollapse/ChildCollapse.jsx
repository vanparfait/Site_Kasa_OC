import React, { useState } from "react";
import "./ChildCollapse.css";
import chevrondownsolid from "../../images/chevrondownsolid.svg";
import chevronupsolid from "../../images/chevronupsolid.svg";

const ChildCollapse = ({ title, response }) => {
  const [open, setOpen] = useState(false);
  function toogle() {
    setOpen(!open);
  }

  return (
    <div className="container">
      <div className="ChildCollapse">
        <h1>{title}</h1>
        <span onClick={toogle}>
          {open ? (
            <img src={chevronupsolid} alt="chevronupsolid" />
          ) : (
            <img src={chevrondownsolid} alt="chevrondownsolid" />
          )}
        </span>
      </div>
      {open && (
        <div className="toogle">
          <p> {response} </p>
        </div>
      )}
    </div>
  );
};

export default ChildCollapse;
