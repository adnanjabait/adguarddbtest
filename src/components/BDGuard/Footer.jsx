import React from 'react';
import styles from './Footer.module.css';

const footerItems = [
  'お問い合わせ｜会員解除',
  'mopita｜動作環境｜機能一覧',
  '用規約｜当社の個人情報保護方針',
  '本アプリのプライバシーポリシー｜特定商取引法の表記'
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {footerItems.map((item, index) => (
        <div key={index} className={styles.footerItem}>
          {item}
        </div>
      ))}
    </footer>
  );
};

export default Footer;