import React from "react";
import Slider from "react-slick";
import photo1 from './image/photo1.jpeg';
import photo2 from './image/photo2.jpeg';
import photo3 from './image/photo3.jpeg';
import photo4 from './image/photo4.jpeg';
import photo5 from './image/photo5.jpeg';


 function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
     <div>
            <img className="w-50 h-80"  src={photo1} alt="Photo 1" />
          </div>
          <div>
            <img  className="w-50 h-80" src={photo2} alt="Photo 2" />
          </div>
          <div>
            <img className="w-50 h-80"  src={photo3} alt="Photo 3" />
          </div>
          <div>
            <img  className="w-50 h-80" src={photo4} alt="Photo 4" />
          </div>
          <div>
            <img className="w-50 h-80" src={photo5} alt="Photo 5" />
          </div>
    </Slider>
  );
}

export default SimpleSlider