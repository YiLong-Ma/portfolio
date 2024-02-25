// Nav.tsx

import React, { useState } from 'react';
import styles from '@/styles/NavComponent.module.css';
import Image from 'next/image';

const NavComponent: React.FC = () => {

    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <div className={styles.nav}>
            <input type="checkbox" id="nav-check" checked={navOpen} onChange={toggleNav} className={styles.navCheck} />
            <div className={styles.navHeader}>
                <a href="/"><Image src="/logo.png" alt="logo" width={50} height={50} className={styles.navTitle} /> </a>
            </div>
            <div className={styles.navBtn} onClick={toggleNav}>
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div className={styles.navLinks}>
                <a href="https://www.linkedin.com/in/elijahrc-chan/" target="_blank">LinkedIn</a>
                <a href="/" target="_blank">Resume</a>
                <a href="/">Contact</a>
            </div>
        </div>
    );
};

export default NavComponent;
