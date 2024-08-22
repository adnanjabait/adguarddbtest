import React from 'react';
import styles from './ModuleInformations.module.css';

function ModuleInformations() {
  return (
    <section className={styles.container}>
      <p className={styles.infoText}>
        BDBuard は、デジタルライフをより簡単で安全にし、オンライン使用時にクレジットカード情報を保護してくれる、安全なクロスプラットフォームのパスワード マネージャーです。ハッカーが盗聴する可能性のある安全でない Web ブラウザーにパスワードやクレジットカード番号を入力して保存する必要はもうありません。
      </p>
      <a
        href="https://stgbyepass.mopita.com/anahamolinemo"
        className={styles.notice}
      >
        「ahamo」「LINEMO」「ドコモ払い」をご利用予定またはご利用中の皆様へのお知らせ
      </a>
      <a
        href="https://stgbyepass.mopita.com/announce"
        className={styles.maintenanceNotice}
      >
        システムメンテナンスのお知らせ
      </a>
    </section>
  );
}

export default ModuleInformations;