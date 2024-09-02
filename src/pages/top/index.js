import * as React from "react";
import styles2 from './member.module.css';
import styles from "@/styles/Home.module.css";
import AdGuardMain from "@/components/AdGuardComponents/AdGuardMain";
import Footer from "@/components/Footer/Footer";
import { useRouter } from 'next/router';

function Member() {
  const router = useRouter();

  const handleRedirect = () => {    
    router.push('/member?ci=R000002750&logincat=0001');
  };


  return (
    <>
      <div className={styles2.stgadgMopitaComByHtmlToDesignFreeVersion29082024115423Gmt6}>
        <AdGuardMain />

        <div className={styles2.adGuardLicenseKeyHelloSudipto112233445566}>
          <h2>Go to BDGurad membership page</h2>
          <br />
          <span style={{ fontWeight: 700 }}>
            Please go to "Member Page" below to check your license key and download the app.
          </span>
          <br />
          <br />
          <button className={styles2.greenButton} onClick={handleRedirect}>
            Go to BDGurad membership page
          </button>
          <br /><br /><br /><br /><br /><br /><br />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Member;
