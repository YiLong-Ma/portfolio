import React from 'react';
import styles from '@/styles/Gallery.module.css';
import NavComponent from '@/components/NavComponent';
import BackgroundComponent from '@/components/Background';
import ImageRoulette from '@/components/imageRoulette';
import Image from 'next/image';

const Gallery = () => {
    return (

        <div className={styles.container}>
            <NavComponent />
            <BackgroundComponent />

            <div >
                <h1 className={styles.Header}>Gallery</h1>
            </div>

            <div className={styles.Mockups}>
                <Image className={styles.img} src="/gallery/A4.png" alt="A4" width={1005} height={1158} />
                <Image className={styles.img} src="/gallery/A5.png" alt="A5" width={1005} height={1158} />
                <Image className={styles.img} src="/gallery/A6.png" alt="A6" width={1005} height={1158} />
            </div>

            <div className={styles.Mockups}>
                <div className={styles.display}>
                    <h2> Bonsai Tree Article</h2>
                    <Image className={styles.img} src="/gallery/B1.jpeg" alt="A4" width={6144} height={4096} />
                    <a style={{ textDecoration: 'none', color: '#48444B' }} href="https://indd.adobe.com/view/6b55a50e-9186-4fde-846a-20aa20ea5cd9" target='_blank'>
                        <button className={styles.btn}>
                            View
                        </button>
                    </a>

                </div>
                <div className={styles.display}>
                    <h2>Mini Apartment Article</h2>
                    <Image className={styles.img} src="/gallery/B2.jpeg" alt="A5" width={6144} height={3072} />
                    <a style={{ textDecoration: 'none', color: '#48444B' }} href="https://indd.adobe.com/view/055f117c-d03d-419b-b767-3060d23b3af8" target='_blank'>
                        <button className={styles.btn}>
                            View
                        </button>
                    </a>
                </div>
            </div>

            <div className={styles.Mockups}>
                <div className={styles.display}>
                    <h2>Camera Tracing ( Adobe Ai)</h2>
                    <Image className={styles.img} src="/gallery/C1.png" alt="A4" width={1215} height={1301} />
                </div>

            </div>
        </div >
    );
};

export default Gallery;