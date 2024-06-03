import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const cardImgStyle = {
    backgroundImage: `url(${images[currentIndex]})`,
  };

  return (
    <div className="relative w-full max-w-screen-xl max-h-screen-xl">
      <div className="w-full h-96 sm:h-72 bg-cover bg-center bg-no-repeat" style={cardImgStyle}></div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full flex justify-between">
        <button className="text-black text-6xl sm:text-4xl md:text-3xl hover:text-gray-700 ml-4" onClick={handlePrev}>&#x2039;</button>
        <button className="text-black text-6xl sm:text-4xl md:text-3xl hover:text-gray-700 mr-4" onClick={handleNext}>&#x203a;</button>
      </div>
    </div>
  );
};

export default ImageCarousel;
