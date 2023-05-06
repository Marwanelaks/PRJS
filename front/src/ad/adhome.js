
import offre from './Offre special.jpg';
import React from "react";
import "./adhome.css";
const Ad = () => {
  return (
    <div className="container containe">
      <div className="image-container imgc">
        <img
          className="image ff"
          src={offre}
          alt="Placeholder"
        />
      </div>
    </div>
  );
};
export default Ad;
