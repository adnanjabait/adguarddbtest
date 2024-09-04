import styles from './CancellationPage.module.css';
import HeaderSection from "@/components/BDGuard/HeaderSection";
import Footer from "@/components/BDGuard/Footer/Footer";
import { useRouter } from 'next/router'; 


export default function CancellationPage() {
    const headerImageSrc = "https://cdn.builder.io/api/v1/image/assets/TEMP/fbc38431ac018da55051afdb4fdac93a0b6c7a9e0a7b33d44fd70f701bbe5878?placeholderIfAbsent=true&apiKey=6d2fa06cce744f22a1e3f36901f6ddf3";
    const infoText = "BDBuard は、デジタルライフをより簡単で安全にし、オンライン使用時にクレジットカード情報を保護してくれる、安全なクロスプラットフォームのパスワード マネージャーです。ハッカーが盗聴する可能性のある安全でない Web ブラウザーにパスワードやクレジットカード番号を入力して保存する必要はもうありません。";
    const noticeText = "「ahamo」「LINEMO」「ドコモ払い」をご利用予定またはご利用中の皆様へのお知らせ";
    const noticeLink = "#notice";
    const maintenanceLink = "#maintenance";
    
    const router = useRouter();  // Initialize useRouter
    const handleReturnClick = () => {
        router.push('/');  // Navigate to the home page
    };

    return (
        <>
        <HeaderSection
            headerImageSrc={headerImageSrc}
            infoText={infoText}
            noticeText={noticeText}
            noticeLink={noticeLink}
            maintenanceLink={maintenanceLink}
        />
        
        <div className={styles.container}>
            <section className={styles.precautions} aria-labelledby="precautions-title">
                <h2 id="precautions-title">Precautions before cancellation</h2>
                <br/><br/><br/><br/>
                <p className={styles.description}>
                    Please note that after cancellation, you will no longer be able to use any of AdGuard's features.
                </p>
                <br/><br/>
                <h3 className={styles.featuresTitle}>Main features of AdGuard</h3>
                <br/><br/>              
                <ul className={styles.featuresList} aria-labelledby="features-title">
                    <li className={styles.featureItem}>- Block annoying ads on websites and apps</li>
                    <li className={styles.featureItem}>- Protect your privacy from web trackers</li>
                    <li className={styles.featureItem}>- Safe Web Browsing</li>
                    <li className={styles.featureItem}>- Restrict inappropriate content</li>
                    <li className={styles.featureItem}>- Block unwanted content to save data</li>
                </ul>
                <br/><br/><br/><br/>
            </section>
            
            <section className={styles.cancellation} aria-labelledby="cancellation-title">
                <h2 id="cancellation-title">Cancellation</h2>
                <br/><br/><br/>
                <p className={styles.thankYouMessage}>Thank you for using AdGuard.</p>
                <p>If you wish to cancel, please click on the Cancel button below.</p>
                <p>Thank you very much for your continued patronage.</p>
                <br/><br/>
                <div className={styles.buttons}>
                    <button 
                        className={styles.return} 
                        aria-label="Return to previous page" 
                        onClick={handleReturnClick}  // Add onClick handler
                    >
                        Return
                    </button>
                
                    <form id="formWithDraw" action="https://devwww.mopita.com/cp/regist" method="post">
                        <p>
                            <button className={styles.cancel} type="submit">
                                Cancel
                            </button>
                        </p>
                        <input type="hidden" name="ci" value="R000002750" />
                        <input type="hidden" name="act" value="rel"/>
                        <input type="hidden" name="nl" value="https://stgbanglalms.mopita.com/unsubscribed"/>
                        <input type="hidden" name="cl" value="https://stgbanglalms.mopita.com/top"/>
                        <input type="hidden" name="fl" value="https://stgbanglalms.mopita.com/top"/>
                    </form>
                </div>
            </section>
        </div>



        <Footer />
        </>
    );
}
