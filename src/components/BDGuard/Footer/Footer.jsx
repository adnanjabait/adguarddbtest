import React from 'react';
import styles from './Footer.module.css';
import FooterLink from './FooterLink';

const footerLinks = [
  [
    { text: 'お問い合わせ', href: '#contact' },
    { text: '会員解除', href: '/unsubscribe' }  // Updated URL for 会員解除
  ],
  [
    { text: 'mopita', href: '#mopita' },
    { text: '動作環境', href: '#requirements' },
    { text: '機能一覧', href: '#features' }
  ],
  [
    { text: '用規約', href: '#terms' },
    { text: '当社の個人情報保護方針', href: '#privacy' }
  ],
  [
    { text: '本アプリのプライバシーポリシー', href: '#app-privacy' },
    { text: '特定商取引法の表記', href: '#commerce-law' }
  ]
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.licenseInfo}>1ライセンス（1ユーザーで利用可能）</p>
      <nav className={styles.middleFooter}>
        {footerLinks.map((linkGroup, groupIndex) => (
          <div key={groupIndex} className={styles.linkGroup}>
            {linkGroup.map((link, index) => (
              <React.Fragment key={index}>
                <span className={styles.linkItem}>
                  <FooterLink href={link.href}>{link.text}</FooterLink>
                </span>
                {index < linkGroup.length - 1 && '｜'}
              </React.Fragment>
            ))}
          </div>
        ))}
      </nav>
      <div className={styles.bottomFooter}>© 株式会社エムティーアイ</div>
    </footer>
  );
}

export default Footer;
