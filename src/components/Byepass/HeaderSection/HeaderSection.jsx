import React from 'react';
import styles from './HeaderSection.module.css';

function HeaderSection() {
  return (
    <header className={styles.headerSection}>
      <div className={styles.contentWrapper}>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b70cd26434de4dc7f115badc944fa984eedff80f9eca010543d8c6338f8d290?placeholderIfAbsent=true&apiKey=89213a71c90348f488f322a43c5d260b" 
          alt="" 
          className={styles.backgroundImage} 
          aria-hidden="true"
        />
        <div className={styles.logoWrapper}>
          <h1 className={styles.visuallyhidden}>ByePass</h1>
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/76086fa207200f07600e1312faa9abad9f342b457863a293f400e5eeacf7acda?placeholderIfAbsent=true&apiKey=89213a71c90348f488f322a43c5d260b" 
            alt="ByePass Logo" 
            className={styles.logo}
          />
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;