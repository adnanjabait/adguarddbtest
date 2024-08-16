import AdGuardMain from "@/components/Adguard/AdGuardComponents/AdGuardMain";
import Footer from "@/components/Adguard/Footer/Footer";
import PurchaseContainer from "@/components/Adguard/PurchaseModule/PurchaseContainer";

export default function Adguard() {
    return(
        <>
            <AdGuardMain />
            <PurchaseContainer />
            <Footer />
        </>
    );
}