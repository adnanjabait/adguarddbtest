import React from 'react';
import { useRouter } from 'next/router';
import { FaGlobe, FaTable, FaDatabase } from 'react-icons/fa';
import styles from './layout.module.css';

const Layout = ({ children }) => {
    const router = useRouter();
    const isActive = (route) => router.pathname.toLocaleLowerCase() === route;

    return (
        <div className={styles.container}>
        <nav className={styles.navbar}>
            <div className={styles.navbarLeft}>
            <span className={styles.adminPanel}>Admin Panel</span>
            </div>
            <div className={styles.navbarCenter}>
            <h1>License Management System</h1>
            </div>
        </nav>
        <div className={styles.sidebar}>
            <ul>
                <li>
                <a
                    href="/components/admin/siteregisterform"
                    className={isActive('/siteregisterform') ? styles.active : ''}
                    onClick={(e) => isActive('/siteregisterform') && e.preventDefault()}
                >
                    <FaGlobe className={styles.icon} /> Site Register
                </a>                    
                </li>
                <li>
                <a
                    href="/TableRegisterForm"  // Assuming this is the correct route
                    className={isActive('/register') ? styles.active : ''}
                    onClick={(e) => isActive('/register') && e.preventDefault()}
                >
                    <FaTable className={styles.icon} /> DB Table Register
                </a>
                </li>
                <li>
                <a
                    href="/DataRegisterForm"  // Assuming this is the correct route
                    className={isActive('/about') ? styles.active : ''}
                    onClick={(e) => isActive('/about') && e.preventDefault()}
                >
                    <FaDatabase className={styles.icon} /> DB Data Register
                </a>
                </li>          
            </ul>
            </div>
        <main className={styles.mainContent}>
            {children}
        </main>
        </div>
    );
};

export default Layout;
