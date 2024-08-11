/**
 * This code was generated by Builder.io.
 */
import React, {useState,useEffect} from "react";
import AdGuardHeader from "./AdGuardHeader";
import NotificationBanner from "./NotificationBanner";
import FeatureSection from "./FeatureSection";
import styles from "./AdGuardStyles.module.css";
import { fetchNotifications } from "../api/notificationApi";
import FooterLinks from "../Footer/FooterLinks/FooterLinks";

const AdGuardMain = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const data = await fetchNotifications();
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    getNotifications();
  }, []);

  console.log(notifications);

  const notificationsArray = Object.entries(notifications).map(([key, value]) => {
    return {
        id: key,
        ...value
    };
  });


  return (
    <main className={styles.mainContainer}>
      <AdGuardHeader />
      {notifications.map((notification, index) => (
        <NotificationBanner
          key={index}
          text={notification.text}
          href={notification.link}
        />
      ))}
      {/* <NotificationBanner
        text="「イマドコサーチ」「ケータイお探しサービス」利用の皆さまへのお知らせ"
        href="#notification1"
      />
      <NotificationBanner
        text="「ahamo」「LINEMO」「ドコモ払い」をご利用予定またはご利用中の皆様へのお知らせ"
        href="#notification2"
      /> */}
      <FeatureSection />
      <FooterLinks/>
      <footer className={styles.footer}>
        <a href="#purchase" className={styles.footerLink}>
          AdGuardの購入 または mopitaへのログイン
        </a>
      </footer>
    </main>
  );
};

export default AdGuardMain;
