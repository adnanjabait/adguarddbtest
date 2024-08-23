import React from 'react';
import styles from './Footer.module.css';

const FooterLink = ({ href, children }) => (
  <a href={href} className={styles.footerLink}>
    {children}
  </a>
);

export default FooterLink;