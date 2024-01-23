import React from 'react';
import styles from '../styles/CardComponent.module.css';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const CardComponent: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  const cardImgStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardImg} style={cardImgStyle}></div>
      <div className={styles.cardBody}>
        <span className={styles.bg}></span>
        <span className={styles.bg}></span>
        <span className={styles.bg}></span>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.para}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;