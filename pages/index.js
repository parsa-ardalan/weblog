import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Skills from "./components/skills/Skills";
import Tools from "./components/tools/Tools";

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

    <div className="w-screen h-screen pt-10 px-3" dir="rtl">

      <div className="flex w-full h-1/2">

        <Profile />

        <Skills />

      </div>

      <Tools />

    </div>


  );
}
