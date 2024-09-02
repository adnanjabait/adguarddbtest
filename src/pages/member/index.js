import * as React from "react";
import styles2 from './member.module.css';
import styles from "@/styles/Home.module.css";
import AdGuardMain from "@/components/AdGuardComponents/AdGuardMain";
import Footer from "@/components/Footer/Footer";

function Member() {
  return (
    <>            
        <div className={styles2.stgadgMopitaComByHtmlToDesignFreeVersion29082024115423Gmt6}>
            <AdGuardMain />    
            
            <div className={styles2.adGuardLicenseKeyHelloSudipto112233445566}>
                <span style={{ fontWeight: 700 }}>BDGuard License Key</span>
                <br /><br /><br />
                <span style={{ color: 'rgba(5,184,12,1)' }}>
                  SudiptoSarker1122334455667788
                </span>
                <br /><br /><br /><br /><br /><br /><br />
            </div>

            <Footer />
        </div>      

    </>
  );
}

export default Member;