import styles from '../styles/Project3.module.css';
import ScrollAnimation from '@/components/ScrollAnimation';
import Link from 'next/link';
import React from 'react';
import ImageRoulette from '@/components/imageRoulette';
import Image from 'next/image';

const project1: React.FC = () => {
    const images1 = ['/tinypaws/1.png', '/tinypaws/2.png', '/tinypaws/3.png', '/tinypaws/4.png', '/tinypaws/5.png'];
    const images2 = ['/tinypaws/L1.png', '/tinypaws/L2.png', '/tinypaws/lo-fi.png'];
    const images3 = ['/tinypaws/hi-fi.png'];


    return (
        <>
            <main className={styles.main}>
                <div className={styles.header}>
                    <h1 className={styles.h}><Link href="/project1" style={{ textDecoration: 'none', color: '#CABDB9' }}>Project 1</Link></h1>
                    <h1 className={styles.h}><Link href="/project2" style={{ textDecoration: 'none', color: '#CABDB9' }}>Project 2</Link></h1>
                    <h1 className={styles.h1}><Link href=".project3" style={{ textDecoration: 'none', color: '#48444B' }}>Project 3</Link></h1>
                    <h1 className={styles.h}><Link href="#" style={{ textDecoration: 'none', color: '#CABDB9' }}>Project 4</Link></h1>
                </div>
                <div className={styles.information}>
                    <div className={styles.imageContainer}>
                        <video width='820' height='540' controls preload='none'>
                            <source src='' type='video/mp4' />
                        </video>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.infoTitle}>Tiny Paws</div>
                        <div className={styles.infoText}>
                            Tinypaws is a cat adoption website aimed to help people find their perfect cat. With bringing light to neglected cats in mind
                            Tinypaws wanted to be easy access and not a hastle to use. With many features like an events page to showcase cats that are up for adoption
                            , or a blog page to read about the latest news on cats, Tinypaws is the perfect place to find your new furry friend.
                        </div>
                    </div>
                </div>

                <ScrollAnimation />

                <div className={styles.body}>
                    <div className={styles.body1}>
                        <div><ImageRoulette images={images1} id="roulette1" /></div>
                        <div className={styles.bodyText1}>
                            <div className={styles.infoTitle}>The Style Guide</div>
                            <div className={styles.infoText}>Tinypaws was designed to be friendly, easy to use and easy to navigate,
                            and so the colours and fonts were chosen to reflect that. The colour scheme was made to be soft and not harmful to the eyes.
                            orange colours were chosen because they are friendly and inviting. The fonts were chosen to be rounded, soft and easy to read.
                            </div>
                            <button className={styles.btn}>
                                <a style={{ textDecoration: 'none', color: '#48444B' }} href="https://www.figma.com/proto/RhxeuuIO366EJiKVQJbZMJ/tinypaws---purradise?type=design&node-id=243-3051&t=Nz2bQmRDlrlRVMp3-1&scaling=min-zoom&page-id=238%3A3002&mode=design" target='_blank'>
                                    See Prototype
                                </a>
                            </button>
                        </div>
                    </div>

                    <div className={styles.body1}>
                        <div className={styles.bodyText1}>
                            <div className={styles.infoTitle}>Planning and Ideation</div>
                            <div className={styles.infoText}>Using figma, the website was planned and ideated. The website was planned to be easy to
                            navigate and understand. The planning oh how the website would look took 2 levels of planning. The first level was a basic 
                            draft on the overall consistant feel of the website. The second level was the planning of the individual pages and how they would look.
                            finally, after the two levels were complete, the lo-fi version was ready to be made.
                            </div>
                        </div>
                        <div><ImageRoulette images={images2} id="roulette2" /></div>
                    </div>

                    <div className={styles.body1}>
                        <div><ImageRoulette images={images3} id="roulette3" /></div>
                        <div className={styles.bodyText1}>
                            <div className={styles.infoTitle}>Design</div>
                            <div className={styles.infoText}>The design was to to showcase cats for adoption, so the team put lots of images of cats on the website for 
                            users to see. 
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