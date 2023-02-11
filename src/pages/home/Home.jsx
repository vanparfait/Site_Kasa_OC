import React from "react";
import Banner from "../../composants/banner/Banner";
import Gallery from "../../composants/gallery/Gallery";
//https://github.com/Cyril-Develop/Kasa
import Header from "../../composants/header/Header";

import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Banner titre="Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  );
};

export default Home;
