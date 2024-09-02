
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import AdGuardMain from "@/components/AdGuardComponents/AdGuardMain";
import PurchaseContainer from "@/components/PurchaseModule/PurchaseContainer";
import Footer from "@/components/Footer/Footer";
import BDGuard from "./bdguard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return(
    <>
      <BDGuard/>
      {/* <AdGuardMain />
      <PurchaseContainer />
      <Footer/> */}
    </>
  );
}
