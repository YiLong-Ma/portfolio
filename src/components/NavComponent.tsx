// NavComponent.tsx
import React from 'react';
import styles from '@/styles/NavComponent.module.css';
import Image from 'next/image';
import Link from 'next/link';

const NavComponent: React.FC = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.navHeader}>
            <Link href="/">
                    <Image className={styles.navTitle} src="/logo.png" alt="logo" width={50} height={50} />
                </Link>

            </div>
            <div className={styles.navBtn}>
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className={styles.navLinks}>
                <a href="https://www.linkedin.com/in/elijahrc-chan" target="_blank">LinkedIn</a>
                <a href="#" target="_blank">Resume</a>
                <a href="#" target="_blank">Contact</a>
            </div>
        </div>
    );
};

export default NavComponent;
