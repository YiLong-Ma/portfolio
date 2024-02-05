// AudioRoulette.tsx
import React, { useState, useEffect } from 'react';
import styles from '../styles/AudioRoulette.module.css';

interface AudioRouletteProps {
  audioFiles: string[];
  id: string;
}

const AudioRoulette: React.FC<AudioRouletteProps> = ({ audioFiles, id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [audioKey, setAudioKey] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (audioFiles?.length || 0)) % (audioFiles?.length || 1));
    setAudioKey((prevKey) => prevKey + 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (audioFiles?.length || 1));
    setAudioKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [audioFiles]);

  const hasAudioFiles = audioFiles && audioFiles.length > 0;
  const isValidIndex = currentIndex >= 0 && currentIndex < (audioFiles?.length || 1);

  return (
    <div className={styles.audioSlider} key={id}>
      {hasAudioFiles && isValidIndex && (
        <>
          <audio key={audioKey} controls>
            <source src={audioFiles[currentIndex]} type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>
          <button className={styles.prevButton} onClick={handlePrev}>&#x2039;</button>
          <button className={styles.nextButton} onClick={handleNext}>&#x203a;</button>
        </>
      )}
    </div>
  );
};

export default AudioRoulette;
