import ImageRoulette from "../components/imageRoulette";
import React from 'react';
import styles from '../styles/Project2.module.css';

const project2: React.FC = () => {
  const images1 = ['/images/test.jpg', '/images/t2.jpg', '/images/psproject.jpg'];
  const images2 = ['/images/t2.jpg', '/images/test.jpg', '/images/psproject.jpg'];

  return (
    <div className={styles.pageContainer}>
      <ImageRoulette images={images1} id="roulette1" />
      <ImageRoulette images={images2} id="roulette2" />
    </div>
  );
};

export default project2;
