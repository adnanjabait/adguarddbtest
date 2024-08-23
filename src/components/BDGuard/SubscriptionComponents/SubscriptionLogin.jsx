import React from 'react';
import Button from './Button';
import styles from './SubscriptionLogin.module.css';

const SubscriptionLogin = () => {
  const handleSubscription = () => {
    console.log('Subscription button clicked');
  };

  const handleLogin = () => {
    console.log('Login button clicked');
  };

  return (
    <section className={styles.container}>
      <Button onClick={handleSubscription}>
        月額利用登録（入会）　月額275円（税込）
      </Button>
      <div className={styles.loginButton}>
        <Button onClick={handleLogin}>mopitaにログイン</Button>
      </div>
    </section>
  );
};

export default SubscriptionLogin;