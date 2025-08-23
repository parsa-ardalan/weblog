import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  return (

    <div className="w-screen h-screen pt-7" dir="rtl">

      <Header />

      <Main />

    </div>


  );
}
