import React from 'react';
import "./Container.css";
import photo1 from "./photogrid1.png";
import photo2 from "./photogrid2.png";
import photo3 from "./photogrid3.png";
import photo4 from "./photogrid4.png";

const Slideshow = () => (
    <div className="slideWrap">
        <div id="slideShow" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={photo1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={photo2} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={photo3} alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={photo4} alt="Fourth slide" />
    </div>
  </div>
</div>
    </div>
    );
    
export default Slideshow;
