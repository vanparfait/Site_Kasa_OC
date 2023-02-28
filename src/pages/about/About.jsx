import React from "react";
import Header from "../../composants/header/Header";
import about_cover from "../../images/about_cover.png";
import Banner from "../../composants/banner/Banner";
import Collapse from "../../composants/collapse/Collapse";

const About = () => {
  return (
    <div className="About">
      <Header />
      <Banner titre="" image={about_cover} />
      <Collapse />
    </div>
  );
};

export default About;
