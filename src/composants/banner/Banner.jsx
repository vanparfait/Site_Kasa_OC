import React from "react";
import "./Banner.css";

const Banner = ({ titre, image }) => {
  return (
    <div className="Banner">
      <div className="titre">{titre}</div>
      <img src={image} alt="banner-imag" />
    </div>
  );
};

export default Banner;
