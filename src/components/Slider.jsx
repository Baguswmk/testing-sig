import { useState } from "react";
import Slider from "react-slick";
import "../style/Slider.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContentInfo from "./ContentInfo";
import MapComponent from "./MapCard";

const SliderComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    beforeChange: (next) => handleSlideChange(next),
  };

  return (
    <Slider {...settings}>
      <div className={`slide-content ${activeSlide === 0 ? "active" : ""}`}>
        <ContentInfo />
      </div>
      <div className={`slide-map ${activeSlide === 1 ? "active" : ""}`}>
        <MapComponent />
      </div>
    </Slider>
  );
};

export default SliderComponent;
