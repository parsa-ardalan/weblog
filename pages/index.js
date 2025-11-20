"use client";

import { useState, useEffect } from "react";

import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Skills from "./components/skills/Skills";
import Tools from "./components/tools/Tools";


export default function Home() {

  // size coding: if lg = tools initScriptLoader, else outside

  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {

    const handleResize = () => setIsLarge(window.innerWidth >= 1024);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (

    <div className="w-screen h-screen pt-10 px-5 md:px-20" dir="rtl">

      <Header />

      <Profile />

      <Skills/>

    </div>
  );
}
