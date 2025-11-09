import React from "react";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
       <img src="sanad-1.jpg" alt="" />
       <img src="sanad-2.jpg" alt="" />
       <img src="sanad-3.jpg" alt="" />
       <img src="sanad-4.jpg" alt="" />
       <img src="sanad-5.jpg" alt="" />
       <img src="sanad-6.jpg" alt="" />
       <img src="sanad-7.jpg" alt="" />
       <img src="sanad-8.jpg" alt="" />
       
      </Slider>
    </div>
  );
}

export default AutoPlay;
