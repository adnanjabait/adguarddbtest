// components/AdGuardScreen.js

import styles from './AdGuardScreen.module.css';

const AdGuardScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="/path-to-adguard-logo.png" alt="AdGuard Logo" className={styles.logo} />
        <h1 className={styles.title}>ADGUARD</h1>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.iconWrapper}>
          <img src="/path-to-door-icon.png" alt="Door Icon" className={styles.icon} />
        </div>
        <p className={styles.text}>
          「AdGuard」の退会処理を完了いたしました。<br />
          ご利用いただき、ありがとうございました。
        </p>
        <button className={styles.button}>TOPへ戻る</button>
      </div>
    </div>
  );
};

export default AdGuardScreen;
