import React from 'react';
import styles from './style.module.css';
import ServiceGrid from './ServiceGrid';
import styles2 from './ServicePage.module.css';
import SubscriptionInfo from './SubscriptionInfo';
import SubscriptionButton from './SubscriptionButton';
import LoginForm from './LoginForm';
import LicenseInfo from './LicenseInfo';
import Footer from './Footer';
import Footer2 from './Footer2';
function BDBuard() {
  return (
    <>
    <main className={styles.container}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbc38431ac018da55051afdb4fdac93a0b6c7a9e0a7b33d44fd70f701bbe5878?placeholderIfAbsent=true&apiKey=b731bb03bf7c461d8c3473bfc00003c8"
        className={styles.image}
        alt="Description of the image"
      />
      <section className={styles.infoText}>
      BDBuard は、デジタルライフをより簡単で安全にし、オンライン使用時にクレジットカード情報を保護してくれる、安全なクロスプラットフォームのパスワード マネージャーです。ハッカーが盗聴する可能性のある安全でない Web ブラウザーにパスワードやクレジットカード番号を入力して保存する必要はもうありません。
    </section>
    <section className={styles.notice}>
      「ahamo」「LINEMO」「ドコモ払い」をご利用予定またはご利用中の皆様へのお知らせ
    </section>
    <section>
        <h1 className={styles.notificationText}>システムメンテナンスのお知らせ</h1>
      </section>
      <section className={styles.features}>
        <h2 className={styles.heading}>特徴</h2>
      </section>
      <section className={styles.overviewText}>
      シンプルで安全な自動パスワード管理ですべてのデジタルデバイスでパスワード管理プロセスを簡素化します。
      AndroidやiOSでの使用はもちろんWindowsやMacでも利用が可能です。利用端末数に制限もありません。
    </section>

      {/* <ServiceGrid /> */}
      <main className={styles2.servicePage}>
        <ServiceGrid />
      </main>
        
        <SubscriptionInfo />
        
        <SubscriptionButton  />
        <LoginForm  />

        <LicenseInfo  />
        <Footer  />
        <Footer2  />
    </main>     
    </>
  );
}

export default BDBuard;