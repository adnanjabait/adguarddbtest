import React from "react";
import styles from './BDGuardDesign.module.css';

function BDGuardDesign() {
  return (
    <main className={styles.container}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbc38431ac018da55051afdb4fdac93a0b6c7a9e0a7b33d44fd70f701bbe5878?placeholderIfAbsent=true&apiKey=b731bb03bf7c461d8c3473bfc00003c8"
        className={styles.heroImage}
        alt="BDGuard hero image"
      />
      <p className={styles.description}>
        BDBuard は、デジタルライフをより簡単で安全にし、オンライン使用時にクレジットカード情報を保護してくれる、安全なクロスプラットフォームのパスワード マネージャーです。ハッカーが盗聴する可能性のある安全でない Web ブラウザーにパスワードやクレジットカード番号を入力して保存する必要はもうありません。
      </p>
      <div className={styles.notice}>
        <a
          href="https://stgbyepass.mopita.com/anahamolinemo"
          className={styles.noticeLink}
        >
          「ahamo」「LINEMO」「ドコモ払い」をご利用予定またはご利用中の皆様へのお知らせ
        </a>
      </div>
      <div className={styles.maintenanceNotice}>
        <a
          href="https://stgbyepass.mopita.com/announce"
          className={styles.maintenanceLink}
        >
          システムメンテナンスのお知らせ
        </a>
      </div>
    </main>
  );
}

export default BDGuardDesign;