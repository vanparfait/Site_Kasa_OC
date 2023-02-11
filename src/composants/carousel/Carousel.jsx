import React, { useState } from "react";
import ArrowRight from "../../images/ArrowRight.jpg";
import ArrowLeft from "../../images/ArrowLeft.jpg";
import "./Carousel.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  function nextSlide({ imageSlider }) {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === imageSlider.length - 1) {
      setCurrentIndex(0);
    }
  }

  function previousSlide({ imageSlider }) {
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
            src={ArrowRight}
            alt="show next slider"
            onClick={nextSlide}
          />
          <img
            className="carousel_arrow carousel_arrow_left"
            src={ArrowLeft}
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
