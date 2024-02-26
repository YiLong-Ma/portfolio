import styles from '../styles/Project4.module.css';
import ScrollAnimation from '@/components/ScrollAnimation';
import Link from 'next/link';
import React from 'react';
import ImageRoulette from '@/components/imageRoulette';
import BackgroundComponent from "@/components/Background";
import NavComponent from '@/components/NavComponent';

const project4: React.FC = () => {
    const images1 = ['/cocoon/1.png', '/cocoon/2.png',];
    const images2 = ['/cocoon/3.png', '/cocoon/4.png', '/cocoon/5.png'];
    const images3 = ['/cocoon/8.png', '/cocoon/9.png',];
    const images4 = ['/cocoon/6.png', '/cocoon/7.png',];


    return (
        <>
            <main className={styles.main}>
                <NavComponent />
                <BackgroundComponent />
                <div className={styles.header}>
                    <h1 className={styles.h}><Link href="/project1" style={{ textDecoration: 'none', color: '#CABDB9' }}>Project 1</Link></h1>
                    <h1 className={styles.h}><Link href="/project2" style={{ textDecoration: 'none', color: '#CABDB9' }}>Project 2</Link></h1>
                    <h1 className={styles.h}><Link href=".project3" style={{ textDecoration: 'none', color: '#CABDB9' }}>Project 3</Link></h1>
                    <h1 className={styles.h1}><Link href="project4" style={{ textDecoration: 'none', color: '#48444B' }}>Project 4</Link></h1>
                </div>
                <div className={styles.information}>
                    <div className={styles.imageContainer}>
                        <video width='820' height='540' controls preload='none'>
                            <source src='cocoon/cocoon.mp4' type='video/mp4' />
                        </video>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.infoTitle}>Cocoon</div>
                        <div className={styles.infoText}>
                            Cocoon is a cutting-edge application that harnesses the power of artificial intelligence to revolutionize
                            the way individuals navigate their professional journeys. By seamlessly scanning and analyzing resumes,
                            Cocoon intelligently matches an individual's skills with their chosen career, ensuring a perfect synergy between
                            aspirations and qualifications.
                        </div>
                    </div>
                </div>

                <ScrollAnimation />

                <div className={styles.body}>
                    <div className={styles.body1}>
                        <div><ImageRoulette images={images1} id="roulette1" /></div>
                        <div className={styles.bodyText1}>
                            <div className={styles.infoTitle}>The Style Guide</div>
                            <div className={styles.infoText}>Cocoons design was to be professional and easy to navigate. The colours and fonts were chosen to reflect that.
                                We used color that represented professionalism and trust. The fonts were chosen to be rounded, soft and easy to read. A minimalistic design
                                was chosen to make the website less cluttered and easy to navigate.
                            </div>
                            <button className={styles.btn}>
                                <a style={{ textDecoration: 'none', color: '#48444B' }} href="https://www.figma.com/proto/nspCZxZzSStXZJnIrYdSf6/Layout-Ideas?type=design&node-id=295-601&t=Jt72IPLmYuVeQ3WT-0&scaling=contain&page-id=55%3A456" target='_blank'>
                                    See Prototype
                                </a>
                            </button>
                        </div>
                    </div>

                    <div className={styles.body1}>
                        <div className={styles.bodyText1}>
                            <div className={styles.infoTitle}>Planning and Ideation</div>
                            <div className={styles.infoText}>With the help of figma, the team was able to plan and ideate the website. This design ideation was
                                especially challenging as the team had remade the design multiple times to make it look professional and revolved around the core function
                                of the website.
                            </div>
                        </div>
                        <div><ImageRoulette images={images2} id="roulette2" /></div>
                    </div>

                    <div className={styles.body1}>
                        <div><ImageRoulette images={images3} id="roulette3" /></div>
                        <div className={styles.bodyText1}>
                            <div className={styles.infoTitle}>Design</div>
                            <div className={styles.infoText}>Design was to showcase the skills of the user and what they were missing. It showed a list of what people are missing
                                and taking that into account, users are able to see what options Cocoon has given them to be able to get the job they want.

                            </div>
                            <button className={styles.btn}>
                                <a style={{ textDecoration: 'none', color: '#48444B' }} href="https://www.figma.com/proto/nspCZxZzSStXZJnIrYdSf6/Layout-Ideas?type=design&node-id=1128-3605&t=Jt72IPLmYuVeQ3WT-0&scaling=scale-down&page-id=593%3A2976&starting-point-node-id=1128%3A3605&show-proto-sidebar=1" target='_blank'>
                                    See Prototype
                                </a>
                            </button>
                        </div>
                    </div>

                    <div className={styles.body1}>
                        <div className={styles.bodyText1}>
                            <div className={styles.infoTitle}>Logo Designs</div>
                            <div className={styles.infoText}>Originally, the website name was Future Quest, however it sounded too much like a game and not a professional website.
                            So the team rebrand the website to Cocoon. The logo was designed to be simple and professional.
                            </div>
                        </div>
                        <div><ImageRoulette images={images4} id="roulette4" /></div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default project4;