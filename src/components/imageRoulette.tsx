import React, { useState } from 'react';
import styles from '../styles/ImageRoulette.module.css';

interface ImageRouletteProps {
  images: string[];
  id: string;
}

const ImageRoulette: React.FC<ImageRouletteProps> = ({ images, id }) => {
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
    <div className={styles.imageSlider} key={id}>
      <div className={styles.image} style={cardImgStyle}></div>
      <button className={styles.prevButton} onClick={handlePrev}>&#x2039;</button>
      <button className={styles.nextButton} onClick={handleNext}>&#x203a;</button>
    </div>
  );
};

export default ImageRoulette;