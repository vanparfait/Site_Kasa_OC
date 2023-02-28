import React, { useState, useEffect } from "react";
import "./Logement.css";
import Header from "../../composants/header/Header";
import Slider from "../../composants/carousel/Carousel";
import { useParams } from "react-router-dom";
//import Collapse from "../../composants/collapse/Collapse";
//import Footer from "../../composants/footer/Footer";
import greyStar from "../../images/grey_star.png";
import redStar from "../../images/red_star.png";
import datas from "../../composants/data/data";
import ChildCollapse from "../../composants/childeCollapse/ChildCollapse";

const Logement = () => {
  // const [datas, setDatas] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:8000/logements")
  //     .then((res) => res.json())
  //     .then((data1) => setDatas(data1));
  // }, []);

  // const idLogement = useParams().id;
  const idLogement = useParams().id;
  const [imageSlider, setImageSlider] = useState([]);

  const dataCurrentLogement = datas.filter((data) => data.id === idLogement);

  useEffect(() => {
    const dataCurrentLogement = datas.filter((data) => data.id === idLogement);
    setImageSlider(dataCurrentLogement[0].pictures);
  }, [idLogement]);
  //console.log(dataCurrentLogement);

  const name = dataCurrentLogement[0].host.name.split(" ");
  const rating = dataCurrentLogement[0].rating;
  const description = dataCurrentLogement[0].description;
  const equipements = dataCurrentLogement[0].equipments.map((equipement) => (
    <li>{equipement}</li>
  ));
  console.log(equipements);
  return (
    <div>
      <Header />

      <Slider imageSlider={imageSlider} />
      <div className="logement">
        <div className="logement_content">
          <div className="logement_content_infos">
            <h1>{dataCurrentLogement[0].title}</h1>
            <p>{dataCurrentLogement[0].location}</p>
            <div>
              {dataCurrentLogement[0].tags.map((tag, index) => {
                return <button key={index}>{tag}</button>;
              })}
            </div>
          </div>
          <div className="logement_content_host">
            <div>
              <div className="logement_content_host_name">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img
                src={dataCurrentLogement[0].host.picture}
                alt="host of this Logement"
              />
            </div>

            <div className="logement_content_host_stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <img
                    key={index}
                    src={ratingValue <= rating ? redStar : greyStar}
                    alt="star"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="accomodation_collapse">
          <div className="accomodation_collapse_item1">
            <ChildCollapse title={"Description"} response={description} />
          </div>
          <div className="accomodation_collapse_item2">
            <ChildCollapse title="Équipements" response={equipements} />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Logement;
