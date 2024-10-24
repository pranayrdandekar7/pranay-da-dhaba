import React from "react";
import "./Slider.css"
import Slider from "react-slick";
import {SLIDER} from "./../../configData/data.js"

 function SimpleSlider() {
 
  const  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed:1500,
    autoplay:true
  };
  return (
    <Slider {...settings}>
      {SLIDER.map((slide, i) => (
      
       <div key={i}>
          <img src={slide.imgUrl} className="slider-img" alt={`Slide ${i}`} />
        </div>
      ))}
    </Slider>
  );
}

export default SimpleSlider;