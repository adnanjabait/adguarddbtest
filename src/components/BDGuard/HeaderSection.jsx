import React from "react";
import styles from './HeaderSection.module.css';
import Features from "@/components/BDGuard/Features";

function HeaderSection({ headerImageSrc, infoText, noticeText, noticeLink, maintenanceLink }) {
  return (
    <>
      <header className={styles.container}>
        <img loading="lazy" src={headerImageSrc} className={styles.headerImage} alt="BDBuard service illustration" />      
      </header>
      
      <header className={styles.container}>      
        <p className={styles.infoText}>{infoText}</p>
        <div className={styles.notice} role="alert">
          <a href={noticeLink}>{noticeText}</a>
        </div>
        <a href={maintenanceLink} className={styles.linkText}>システムメンテナンスのお知らせ</a>      
      </header>

      <Features />
    </>
  );
}

export default HeaderSection;