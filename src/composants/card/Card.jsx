import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
//import Slider from "../carousel/Carousel";

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/ ${id}`} className="Card">
      <img src={cover} alt={title} />
      <h1> {title} </h1>
    </Link>
  );
};

export default Card;
