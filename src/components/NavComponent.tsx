import React, { useState } from 'react';
import styles from '@/styles/NavComponent.module.css';
import Image from 'next/image';

const NavComponent: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <a href="/"className={styles.title}>
            <Image src="/logo.png" alt="logo" width={50} height={50}  />
            </a>
            <div className={styles.menu} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
                <li>
                    <a href="https://www.linkedin.com/in/elijahrc-chan/" target='_blank' className={styles.link}>LinkedIn</a>
                </li>
                <li>
                    <a href="#" target='_blank' className={styles.link}>Resume</a>
                </li>
                <li>
                    <a href="#" target='_blank' className={styles.link}>Contacts</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavComponent;