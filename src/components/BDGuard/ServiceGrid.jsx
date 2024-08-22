import React from 'react';
import ServiceCard from './ServiceCard';
import styles from './ServiceGrid.module.css';

const serviceData = [
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e111ff1feefe52cd2cb773f7c0d289e24d952f7fc4ed43e61c83a26a3a6310a?placeholderIfAbsent=true&apiKey=b731bb03bf7c461d8c3473bfc00003c8",
    title: "Web&Mobileアプリ",
    description: "BDGuardは基本的にお客様のニーズに合わせて開発プラットフォームと技術者チームを編成して、Web＆Mobileアプリケーション開発をしています。"
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/33764696aa3579956f128e1e89bead1e60d5e8ae30590ece2748555d3156385e?placeholderIfAbsent=true&apiKey=b731bb03bf7c461d8c3473bfc00003c8",
    title: "カスタムソフトウェア",
    description: "BDGuardはお客様のビジネス要件を分析し、仕様書のもとにアジャイル方式でカスタムソフトウェア開発をしています。単体テストと統合テストのためにも専用チームを準備しています。"
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f55bca3f2a8247adcdc2901d4527b0e21d6822d1bef3f2b6e7bd4b3905ac7f4e?placeholderIfAbsent=true&apiKey=b731bb03bf7c461d8c3473bfc00003c8",
    title: "BDGuardサービス",
    description: "BDGuardはオンライン学校管理システムサービスを提供しています。オンライン申し込みからはじめて学生管理・講師管理・カリキュラム管理・試験及び成績管理、お支払い管理等はお客様のニーズに合わせてカスタマイズも可能となっています。"
  }
];

const ServiceGrid = () => {
  return (
    <section className={styles.serviceGrid}>
      <div className={styles.gridContainer}>
        {serviceData.map((service, index) => (
          <div key={index} className={styles.gridItem}>
            <ServiceCard
              imgSrc={service.imgSrc}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;