import React from 'react';
import Button from './Button';
import styles from './SubscriptionLogin.module.css';
import Cookies from 'js-cookie';
import { useState,useEffect } from 'react';

const SubscriptionLogin = () => {

  const [cookieData,setCookieData] = useState(null);

  useEffect(()=>{
    let cookieValue = Cookies.get('iai_mtisess_secure');
    if(cookieValue!=null || cookieValue !='' || cookieValue!=undefined){
      setCookieData(cookieValue);
    }
},[]);

  const handleSubscription = () => {
    console.log('Subscription button clicked');
  };

  const handleLogin = () => {
    console.log('Login button clicked');
  };

  return (
    <section className={styles.container}>
      <div className={styles.formContainer}>
        <form id="formSubscribe" action="https://devwww.mopita.com/cp/regist" method="post">
          <p>
            <Button type="submit" onClick={handleSubscription}>
              [STG] バングラライセンス管理システム 550円 (税込)
            </Button>
          </p>
          <input type="hidden" name="ci" value="R000002750" />
          <input type="hidden" name="act" value="reg" />
          <input type="hidden" name="nl" value="https://stg.imasale.com/member" />
          <input type="hidden" name="cl" value="https://stg.imasale.com/top" />
          <input type="hidden" name="fl" value="https://stg.imasale.com/top" />
        </form>
      </div>

    {cookieData==null &&
        <div className={`${styles.formContainer} ${styles.loginButton}`}>
        <form id="formLogin" action="https://devwww.mopita.com/cp/login" method="post">
          <p>
            <Button type="submit" onClick={handleLogin}>
              mopitaにログイン
            </Button>
          </p>
          <input type="hidden" name="nl" value="https://stg.imasale.com/top" />
        </form>
      </div>
    }

    </section>
  );
};

export default SubscriptionLogin;
