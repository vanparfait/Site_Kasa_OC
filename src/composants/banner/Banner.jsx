import React from "react";
import "./Banner.css";

const Banner = ({ titre }) => {
  return (
    <div className="Banner">
      <div className="titre">{titre}</div>
    </div>
  );
};

export default Banner;
