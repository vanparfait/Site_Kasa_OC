import React, { useState } from "react";
import chevron_carousel_left from "../../images/chevron_carousel_left.png";
import chevron_carousel_right from "../../images/chevron_carousel_right.png";
import "./Carousel.css";

const Slider = ({ imageSlider }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  function nextSlide() {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === imageSlider.length - 1) {
      setCurrentIndex(0);
    }
  }

  function previousSlide() {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) {
      setCurrentIndex(imageSlider.length - 1);
    }
  }

  return (
    <div
      style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }}
      className="carousel"
    >
      {imageSlider.length > 1 && (
        <div>
          <img
            className="carousel_arrow carousel_arrow_right"
            src={chevron_carousel_right}
            alt="show next slider"
            onClick={nextSlide}
          />
          <img
            className="carousel_arrow carousel_arrow_left"
            src={chevron_carousel_left}
            alt="show previous slider"
            onClick={previousSlide}
          />
          <p className="slideCount">
            {currentIndex + 1} / {imageSlider.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Slider;
