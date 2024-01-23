import styles from '../styles/ScrollAnimation.module.css'

export default function ScrollAnimation() {
    return (
        <>
            <div className={styles.mouseScroll}>
                <div className={styles.mouse}>
                    <div className={styles.mouseIn}></div>
                </div>
                <div>
                    <span className={styles.downArrow1}></span>
                    <span className={styles.downArrow2}></span>
                    <span className={styles.downArrow3}></span>
                </div>
            </div>
        </>
    )
}
