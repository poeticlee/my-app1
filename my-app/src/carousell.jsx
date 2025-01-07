import React from "react";
import "./styles.css"; // Import your styles

import pix1 from "./assets/pix1.png";
import pix2 from "./assets/pix2.png";
import pix3 from "./assets/pix3.png";
import pix4 from "./assets/pix4.png";

const Carousell = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <img src={pix1} alt="Slide 1" />
        <img src={pix2} alt="Slide 2" />
        <img src={pix3} alt="Slide 3" />
        <img src={pix4} alt="Slide 4" />
        {/* Duplicate images for seamless loop */}
        <img src={pix1} alt="Slide 1" />
        <img src={pix2} alt="Slide 2" />
        <img src={pix3} alt="Slide 3" />
        <img src={pix4} alt="Slide 4" />
      </div>
    </div>
  );
};

export default Carousell;


