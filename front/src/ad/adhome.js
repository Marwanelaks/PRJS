import React, { useState, useEffect } from "react";
import offre from './fff/Offre special.jpg';
import offre1 from "./fff/wallpaper.jpg";

import "./adhome.css";

const Ad = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const imag = [offre, offre1];
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const lastIndex = imag.length - 1;
      const shouldResetIndex = imgIndex === lastIndex;
      const index = shouldResetIndex ? 0 : imgIndex + 1;
      setImgIndex(index);
    }, 2000);  
  }, [imgIndex, imag]); 

  return (
    <div className="container containe">
      <div className="image-container imgc">
        <img className="image ff" src={imag[imgIndex]} alt="slide"  />
      </div>
    </div>
  );
};

export default Ad;
