import styles from '../styles/CaseStudy.module.css';
import ScrollAnimation from '@/components/ScrollAnimation';
import Link from 'next/link';
import React from 'react';
import ImageRoulette from '@/components/imageRoulette';
import Image from 'next/image';

const CaseStudy: React.FC = () => {
    const images1 = ['/images/newHabitsCover.png', '/images/test.jpg', '/images/psproject.jpg'];

    return (
        <>
            <main className={styles.main}>
                <div className={styles.header}>
                    <h1 className={styles.h1}>Project 1</h1>
                    <h1 className={styles.h}><Link href="/project2">Project 2</Link></h1>
                    <h1 className={styles.h}>Project 3</h1>
                    <h1 className={styles.h}>Project 4</h1>
                </div>
                <div className={styles.information}>
                    <div className={styles.imageContainer}>
                        <video width='820' height='540' controls preload='none'>
                            <source src='/images/NewHabitsWebAppDemo.mp4' type='video/mp4'/>
                        </video>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.infoTitle}>New Habits</div>
                        <div className={styles.infoText}>
                        Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                        dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
                        sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
                        </div>
                    </div>
                </div>

                <ScrollAnimation />

                <div className={styles.body}>
                    <div className={styles.body1}>
                        <div>
                            <ImageRoulette images={images1} id="roulette1" />
                        </div>
                        <div className={styles.bodyText1}>
                            <div className={styles.infoTitle}>Design</div>
                            <div>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                                dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
                                sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
                                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                                Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                            </div>
                        </div>
                    </div>

                    <div className={styles.body1}>

                        <div className={styles.bodyText1}>
                            <div className={styles.infoTitle}>Design</div>
                            <div>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                                dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
                                sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
                                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                                Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                            </div>
                        </div>
                        <div>
                            <ImageRoulette images={images1} id="roulette1" />
                        </div>
                    </div>

                    <div className={styles.body1}>
                        <div>
                            <ImageRoulette images={images1} id="roulette1" />
                        </div>
                        <div className={styles.bodyText1}>
                            <div className={styles.infoTitle}>Design</div>
                            <div>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                                dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
                                sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
                                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                                Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                            </div>
                        </div>
                    </div>
                    
                </div>
            </main>
        </>
    );
}

export default CaseStudy;