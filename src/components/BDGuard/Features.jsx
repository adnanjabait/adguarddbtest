import React from "react";
import styles from './Features.module.css';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/67562330c5ca3a8fd013eb01478d308442f7293ccbec58e1b83301c009a2745c?placeholderIfAbsent=true&apiKey=6d2fa06cce744f22a1e3f36901f6ddf3",
    title: "Web&Mobileアプリ",
    description: "BDGuardは基本的にお客様のニーズに合わせて開発プラットフォームと技術者チームを編成して、Web＆Mobileアプリケーション開発をしています。"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a8b5f333d81bc1864d71f7e7b07e26b0264fced9dec772449e78dfd2b336dc5?placeholderIfAbsent=true&apiKey=6d2fa06cce744f22a1e3f36901f6ddf3",
    title: "カスタムソフトウェア",
    description: "BDGuardはお客様のビジネス要件を分析し、仕様書のもとにアジャイル方式でカスタムソフトウェア開発をしています。単体テストと統合テストのためにも専用チームを準備しています。"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e5f712c36241a9c41776b36656a79b2c29b000fcd37ce03f9ac24339d91844d?placeholderIfAbsent=true&apiKey=6d2fa06cce744f22a1e3f36901f6ddf3",
    title: "BDGuardサービス",
    description: "BDGuardはオンライン学校管理システムサービスを提供しています。オンライン申し込みからはじめて学生管理・講師管理・カリキュラム管理・試験及び成績管理、お支払い管理等はお客様のニーズに合わせてカスタマイズも可能となっています"
  }
];

function Features() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>特徴</h2>
      <p className={styles.overview}>
        シンプルで安全な自動パスワード管理ですべてのデジタルデバイスでパスワード管理プロセスを簡素化します。
        AndroidやiOSでの使用はもちろんWindowsやMacでも利用が可能です。利用端末数に制限もありません。
      </p>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.serviceColumn}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.subscriptionInfo}>
        <div className={styles.subscriptionContent}>
          <h3 className={styles.subscriptionHeading}>
            BDGuardを購入するか、mopitaにログインしてください
          </h3>
          <p className={styles.monthlyInfo}>
            ご利用をご希望の方は、下記の「月額利用登録（入会）　月額275円（税込）」より課金登録
            (入会) を行ってください。
          </p>
          <p className={styles.purchaseInfo}>
            すでにBDGuardをご購入いただいている場合は、下記の「mopitaにログイン」をクリックしてログインしてください。
          </p>
          <p className={styles.paymentInfo}>
            本サービスは、mopitaの会員ログイン・課金決済機能を利用しています。お支払いに関しては、mopitaが対応してい
            る決済方法、mopitaアカウントに登録されている支払い方法に準じます。
          </p>
          <p className={styles.subscriptionDetails}>
            本サービスは登録完了後から、解約まで1ヶ月ごとの自動契約更新となり、毎月月額料金がかかります。月の途中で本
            サービスを申し込んだ場合や解約した場合でも、月額料金満額をお支払いいただきます。
          </p>
        </div>
      </div>
      
    </section>
  );
}

export default Features;