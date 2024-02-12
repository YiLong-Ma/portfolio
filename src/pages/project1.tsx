import styles from '../styles/Project1.module.css';
import ScrollAnimation from '@/components/ScrollAnimation';
import Link from 'next/link';
import React from 'react';
import ImageRoulette from '@/components/imageRoulette';
import BackgroundComponent from "@/components/Background";
import NavComponent from '@/components/NavComponent';

const project1: React.FC = () => {
    const images1 = ['/HumphreyIcons/11.png', '/HumphreyIcons/12.png', '/HumphreyIcons/13.png', '/HumphreyIcons/14.png', '/HumphreyIcons/15.png', '/HumphreyIcons/16.png', '/HumphreyIcons/17.png', '/HumphreyIcons/18.png', '/HumphreyIcons/19.png', '/HumphreyIcons/20.png', '/HumphreyIcons/21.png'];
    const images2 = ['/HumphreyIcons/1.png', '/HumphreyIcons/2.png', '/HumphreyIcons/3.png', '/HumphreyIcons/4.png', '/HumphreyIcons/5.png '];
    const images3 = ['/HumphreyIcons/6.png', '/HumphreyIcons/7.png', '/HumphreyIcons/8.png', '/HumphreyIcons/9.png', '/HumphreyIcons/10.png '];


    return (
        <>
            <main className={styles.main}>
                <NavComponent />
                <BackgroundComponent />
                <div className={styles.header}>
                    <h1 className={styles.h1}><Link href="/project1" style={{ textDecoration: 'none', color: '#48444B' }}>Project 1</Link></h1>
                    <h1 className={styles.h}><Link href="/project2" style={{ textDecoration: 'none', color: '#CABDB9' }}>Project 2</Link></h1>
                    <h1 className={styles.h}><Link href="#" style={{ textDecoration: 'none', color: '#CABDB9' }}>Project 3</Link></h1>
                    <h1 className={styles.h}><Link href="#" style={{ textDecoration: 'none', color: '#CABDB9' }}>Project 4</Link></h1>
                </div>
                <div className={styles.information}>
                    <div className={styles.imageContainer}>
                        <video width='820' height='540' controls preload='none'>
                            <source src='/images/NewHabitsWebAppDemo.mp4' type='video/mp4' />
                        </video>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.infoTitle}>New Habits</div>
                        <div className={styles.infoText}>
                            New Habits is an app designed for early identification of potential drug addiction.
                            Using a brief quiz system, users self-assess their habits, receiving personalized insights.
                            The app fosters a non-judgmental environment and provides resources for those seeking support and intervention.
                            The app is designed to be user-friendly, with a mascot named Humphrey to guide users through the app.
                            This app is not meant to replace professional help, but to provide a starting point for those who may need it.
                        </div>
                    </div>
                </div>

                <ScrollAnimation />

                <div className={styles.body}>
                    <div className={styles.body1}>
                        <div><ImageRoulette images={images1} id="roulette1" /></div>
                        <div className={styles.bodyText1}>
                            <div className={styles.infoTitle}>The Style Guide</div>
                            <div className={styles.infoText}>Multiple Icons and Logos were designed to be shown throughout the app.
                                The team wanted to create a character that would be the face of the app,
                                that would be friendly, and a guide to the user. The character was named Humphrey.
                                Humphrey's design was based off Orca whales which represneted strength and protection,
                                along with luck, compassion and family. Font that are soft, easy to read and friendly vibes were
                                chosen to make user feel confortable and safe.
                            </div>
                            <button className={styles.btn}>
                                <a style={{ textDecoration: 'none', color: '#48444B' }} href="https://www.figma.com/proto/jwQtp1e8FBRAKCCgcckOVG/Baja-Design?type=design&node-id=54-52&t=avstkbmllAAJhJZl-1&scaling=scale-down&page-id=37%3A25&starting-point-node-id=54%3A52&mode=design" target='_blank'>
                                    See Prototype
                                </a>
                            </button>
                        </div>
                    </div>

                    <div className={styles.body1}>
                        <div className={styles.bodyText1}>
                            <div className={styles.infoTitle}>Planning and Ideation</div>
                            <div className={styles.infoText}>Using FigJam, the team was able to plan out what the core functions of the app would be.
                                It started with what the app would be about and what the user would be able to do.
                                Then the team moved on to what content would be put into each page and what the user would
                                see. Finally came the theme and ideation of the mascot/character of the app. The team chose
                                to use a whale as the mascot, which would be named Humphrey.
                            </div>
                            <button className={styles.btn}>
                                <a style={{ textDecoration: 'none', color: '#48444B' }} href="https://www.figma.com/file/lth0PCh4JMoZaBYZK5krwI/Design2-Big-Project-Brainstorm?type=whiteboard&node-id=0%3A1&t=dVv6UpL1hwMHlgEq-1" target='_blank'>
                                    See Prototype
                                </a>
                            </button>
                        </div>
                        <div><ImageRoulette images={images2} id="roulette2" /></div>
                    </div>

                    <div className={styles.body1}>
                        <div><ImageRoulette images={images3} id="roulette3" /></div>
                        <div className={styles.bodyText1}>
                            <div className={styles.infoTitle}>Design</div>
                            <div className={styles.infoText}>The design of the app was made so it would be easy to navigate, understand and use.
                                It should give friendly and safe vibes to the user when using the app, and should not cause any confusion or distress.
                                The choice and size of fonts were made to be easy to read and understand. The color scheme was made to be soft and not
                                harmful to the eyes.
                            </div>
                            <button className={styles.btn}>
                                <a style={{ textDecoration: 'none', color: '#48444B' }} href="https://www.figma.com/proto/jwQtp1e8FBRAKCCgcckOVG/Baja-Design?type=design&node-id=246-29&t=HTH3VeL2Nk4iXiBh-1&scaling=scale-down&page-id=243%3A29&starting-point-node-id=246%3A29&mode=design" target='_blank'>
                                    See Prototype
                                </a>
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}

export default project1;