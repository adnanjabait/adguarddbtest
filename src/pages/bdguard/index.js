import HeaderSection from "@/components/BDGuard/HeaderSection";
import SubscriptionLogin from "@/components/BDGuard/SubscriptionComponents/SubscriptionLogin";
import Footer from "@/components/BDGuard/Footer/Footer";

export default function BDGuard() {
    const headerImageSrc = "https://cdn.builder.io/api/v1/image/assets/TEMP/fbc38431ac018da55051afdb4fdac93a0b6c7a9e0a7b33d44fd70f701bbe5878?placeholderIfAbsent=true&apiKey=6d2fa06cce744f22a1e3f36901f6ddf3";
    const infoText = "BDBuard は、デジタルライフをより簡単で安全にし、オンライン使用時にクレジットカード情報を保護してくれる、安全なクロスプラットフォームのパスワード マネージャーです。ハッカーが盗聴する可能性のある安全でない Web ブラウザーにパスワードやクレジットカード番号を入力して保存する必要はもうありません。";
    const noticeText = "「ahamo」「LINEMO」「ドコモ払い」をご利用予定またはご利用中の皆様へのお知らせ";
    const noticeLink = "#notice";
    const maintenanceLink = "#maintenance";
    
    return (
        <>      
            <div>
                <HeaderSection
                    headerImageSrc={headerImageSrc}
                    infoText={infoText}
                    noticeText={noticeText}
                    noticeLink={noticeLink}
                    maintenanceLink={maintenanceLink}
                />
                <SubscriptionLogin />
                <Footer />
            </div>
            


            {/* <DeviceSubscriptionButton   formId={"google.com"}
                                        formAction={"google.com"}
                                        ci={"R00027"}
                                        act={"reg"} 
                                        nl={"stag.com"} 
                                        cl={"stag.com"} 
                                        fl={"stag.com"} 
                                        deviceType={"モバイル/PC 合計 "} 
                                        deviceCount={"1"} 
                                        deviceUnit={"台"} 
                                        monthlyFeeText={"月額利用登録 "} 
                                        monthlyFeeAmount={"220円 (税込)"} 
            /> */}
            {/* <LoginForm formId={"formLogin"} action={"google.com"} nl={"stag.com"} /> */}
        </>
    );
}