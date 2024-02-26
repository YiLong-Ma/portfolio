import styles from '../styles/Project2.module.css';
import ScrollAnimation from '@/components/ScrollAnimation';
import Link from 'next/link';
import React from 'react';
import ImageRoulette from '@/components/imageRoulette';
import AudioRoulette from '@/components/AudioRoulette';
import Image from 'next/image';
import BackgroundComponent from "@/components/Background";
import NavComponent from '@/components/NavComponent';

const project2: React.FC = () => {
  const images1 = ['/keyboard/5.png', '/keyboard/1.png', '/keyboard/2.png', '/keyboard/3.png', '/keyboard/4.png'];
  const audioFiles = ['/keyboard/1.mp3', '/keyboard/2.mp3', '/keyboard/3.mp3'];
  const images3 = ['/HumphreyIcons/6.png', '/HumphreyIcons/7.png', '/HumphreyIcons/8.png', '/HumphreyIcons/9.png', '/HumphreyIcons/10.png '];


  return (
    <>
      <main className={styles.main}>
        <NavComponent />
        <BackgroundComponent />
        <div className={styles.header}>
          <h1 className={styles.h}><Link href="/project1" style={{ textDecoration: 'none', color: '#CABDB9' }}>Project 1</Link></h1>
          <h1 className={styles.h1}><Link href="/project2" style={{ textDecoration: 'none', color: '#48444B' }}>Project 2</Link></h1>
          <h1 className={styles.h}><Link href="/project3" style={{ textDecoration: 'none', color: '#CABDB9' }}>Project 3</Link></h1>
          <h1 className={styles.h}><Link href="/project4" style={{ textDecoration: 'none', color: '#CABDB9' }}>Project 4</Link></h1>
        </div>
        <div className={styles.information}>
          <div className={styles.imageContainer}>
            <video width='820' height='540' controls preload='none'>
              <source src='/keyboard/keyboard.mp4' type='video/mp4' />
            </video>
          </div>
          <div className={styles.info}>
            <div className={styles.infoTitle}>Keyboard Animation</div>
            <div className={styles.infoText}>
              This keyboard animation was created using Adobe After Effects.
              It was created to showcase different methods of motion graphic animations
              in addition to using graphics created in Adobe Illustrator. With different
              compositions and keyframes, the animation was created to be smooth and visually
              with the help of music and additional sound effects.
            </div>
          </div>
        </div>

        <ScrollAnimation />

        <div className={styles.body}>
          <div className={styles.body1}>
            <div><ImageRoulette images={images1} id="roulette1" /></div>
            <div className={styles.bodyText1}>
              <div className={styles.infoTitle}>Creating the assets</div>
              <div className={styles.infoText}>These digital assets were created from scratch using Adobe Illustrator.
                Using multiple layers, the keyboard was created in 4 parts: Keycaps, Switches, PCB and case. They were
                then imported into After Effects to be animated.
              </div>
            </div>
          </div>

          <div className={styles.body1}>
            <div className={styles.bodyText1}>
              <div className={styles.infoTitle}>Techniques used</div>
              <div className={styles.infoText}>
                First things first, the basic position of the keyboard was created.
                By using the position and scale keyframes, most of the animations were created.
                With a little tweaking in the speed graph or using easy ease, the animations were
                made to be smooth and visually appealing. The animations of the switches were a little
                more complex, by offsetting the timing of the keyframes, the switches were made to look
                like they were being pressed down. The sound effects were added to make the animation more
                convincing. Here are the 3 full audio files used in the animation.
              </div>
            </div>
            <div className={styles.centeredContainer}>
              <div>
                <Image
                  src="/keyboard/img.jpeg"
                  alt="sick mechanical keyboard"
                  width={600}
                  height={350}
                />
              </div>
              <div className={styles.audioCenter}>
                <AudioRoulette audioFiles={audioFiles} id="uniqueId" />
              </div>
            </div>
          </div>

          {/* 
          <div className={styles.body1}>
            <div><ImageRoulette images={images3} id="roulette3" /></div>
            <div className={styles.bodyText1}>
              <div className={styles.infoTitle}>Design</div>
              <div className={styles.infoText}>The design of the app was made so it would be easy to navigate, understand and use.
                It should give friendly and safe vibes to the user when using the app, and should not cause any confusion or distress.
                The choice and size of fonts were made to be easy to read and understand. The color scheme was made to be soft and not
                harmful to the eyes.
              </div>
            </div>
          </div> */}

        </div>
      </main>
    </>
  );
}

export default project2;