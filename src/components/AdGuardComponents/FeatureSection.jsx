/**
 * This code was generated by Builder.io.
 */
import React from "react";
import FeatureCard from "./FeatureCard";
import styles from "./AdGuardStyles.module.css";

const FeatureSection = () => {
  const features = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d304601246b557ecf73e948c84d548668b631e2bb0225e7a534310680dbb8e27?apiKey=3808323d051d4dd3b06c5d8d2529646e&&apiKey=3808323d051d4dd3b06c5d8d2529646e",
      title: "広告ブロッカー",
      description:
        "AdGuardは迷惑なバナー、ポップアップ、ビデオ広告を一括で処理します。",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c71545f7508a5dcd81f8c705cd3b22332ef59d5f661955ed8d7f80578daf9dfe?apiKey=3808323d051d4dd3b06c5d8d2529646e&&apiKey=3808323d051d4dd3b06c5d8d2529646e",
      title: "プライバシー保護",
      description:
        "AdGuardは、ウェブに存在する多数のトラッカーやアクティビティアナライザーからデータを保護します。",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ce5d1c4d8d3b8eaded28a2ae1bf1e55ff540fdc2653208bc1a0a0848770d3f71?apiKey=3808323d051d4dd3b06c5d8d2529646e&&apiKey=3808323d051d4dd3b06c5d8d2529646e",
      title: "ブラウジングセキュリティ",
      description:
        "AdGuardをインストールすれば、不正なウェブサイトやマルウェアからの攻撃を避けることができます。",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/858772650b775f70ea24899b779eb557b5d43d62f5ceed4f7f031d41c51f57f1?apiKey=3808323d051d4dd3b06c5d8d2529646e&&apiKey=3808323d051d4dd3b06c5d8d2529646e",
      title: "ペアレンタルコントロール",
      description:
        "お子様が不適切なコンテンツやアダルトコンテンツにアクセスすることを制限できます。",
    },
  ];

  return (
    <section className={styles.featureSection}>
      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
