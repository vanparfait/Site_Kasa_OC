import React from "react";
import "./Card.css";
//import { Link } from "react-router-dom";

const Card = ({ title, cover }) => {
  return (
    <div className="Card">
      <img src={cover} alt={title} />
      <h1> {title} </h1>
    </div>
  );
};

export default Card;
