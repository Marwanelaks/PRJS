import React, { useState } from 'react'
import image1 from "./imgs/1.jpg"
import image2 from "./imgs/2.jpg"
import image3 from "./imgs/3.jpg"
export default function SliderComponent(props) {
   const [currentIndex, setCurrentIndex] = useState(0);
   const images = props.imgs;
   const prevSlide = () => {
      const lastIndex = images.length - 1;
      const shouldResetIndex = currentIndex === 0;
      const index = shouldResetIndex ? lastIndex : currentIndex - 1;
      setCurrentIndex(index);
    };
  
    const nextSlide = () => {
      const lastIndex = images.length - 1;
      const shouldResetIndex = currentIndex === lastIndex;
      const index = shouldResetIndex ? 0 : currentIndex + 1;
      setCurrentIndex(index);
    };
  return (
  <>
   <button className="prev btn" onClick={prevSlide}>
   &#10094;
   </button>
   <img className="slimg" src={images[currentIndex]} alt="slider" />
   <button className="next btn " onClick={nextSlide}>
   &#10095;
   </button>
   </>
  )
}
