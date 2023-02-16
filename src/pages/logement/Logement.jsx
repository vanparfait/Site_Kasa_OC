import React, { useState, useEffect } from "react";
import "./Logement.css";
import Header from "../../composants/header/Header";
import Slider from "../../composants/carousel/Carousel";
import { useParams } from "react-router-dom";

const Logement = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/logements")
      .then((res) => res.json())
      .then((data1) => setDatas(data1));
  }, []);

  const idLogement = useParams("id").id;
  const [imageSlider, setImageSlider] = useState([]);

  const dataCurrentLogement = datas.filter((data) => data.id === idLogement);
  useEffect(() => {
    const dataCurrentLogement = datas.filter((data) => data.id === idLogement);
    setImageSlider(dataCurrentLogement[0].pictures);
  }, [datas, idLogement]);

  const name = dataCurrentLogement[0].host.name.split(" ");
  const rating = dataCurrentLogement[0].rating;
  const description = dataCurrentLogement[0].description;
  const equipments = dataCurrentLogement[0].equipments;

  return (
    <div>
      <Header />

      <Slider imageSlider={imageSlider} />
    </div>
  );
};

export default Logement;
