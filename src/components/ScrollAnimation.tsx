import { useRef } from 'react';
import styles from '../styles/ScrollAnimation.module.css';

export default function ScrollAnimation() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScrollToProjects = () => {
        if (scrollRef.current) {
          scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <>
            <div className={styles.mouseScroll} style={{ cursor: 'pointer' }} onClick={handleScrollToProjects}>
                <div className={styles.mouse}>
                    <div className={styles.mouseIn}></div>
                </div>
                <div>
                    <span className={styles.downArrow1}></span>
                    <span className={styles.downArrow2}></span>
                    <span className={styles.downArrow3}></span>
                </div>
            </div>
            <div ref={scrollRef}></div>
        </>
    )
}
