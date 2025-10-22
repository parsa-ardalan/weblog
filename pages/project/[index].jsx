import { useRouter } from "next/router"
import Header from "../components/header/Header";
import Image from "next/image";
import { useState } from "react";

import { Notyf } from "notyf";
import "notyf/notyf.min.css";

export default function Project() {

    // get data from router
    const router = useRouter();

    const project = {

        name: router.query.pname,
        photos: router.query.photos,
        github: router.query.link,
        info: router.query.info
    }

    const projectPhotos = project.photos;

    if (!router.isReady) return null;


    // copy link function

    const copyLink = (index) => {

        navigator.clipboard.writeText(index.github)
        console.log(index.github + " copied to clipboard;");

        const notyf = new Notyf();

        notyf.success("copied")

    }


    return (

        <div className="w-screen h-screen pt-10 px-5" dir="rtl">

            <Header />

            {/* name and info */}
            <div className="col-span-2 rounded-t-xl backdrop-blur-xs h-auto py-3 px-3 bg-white/20 mt-10">

                <h1 className="text-xl text-white/70 text-shadow-sm text-shadow-black"> {project.name} </h1>

                <p className="text-sm text-shadow-sm text-white/70 text-shadow-black w-3/4 h-auto pr-1 mt-2" dir="rtl">
                    {project.info}
                </p>

            </div>


            {/* photos of the project */}
            <div className="h-1/5 mt-1 grid grid-cols-4 gap-3 px-3 py-3 bg-white/20 backdrop-blur-xs">

                {
                    projectPhotos.map((photo) => (

                        <div className="project-image col-span-1 bg-white/20 shadow-md shadow-black rounded-sm"
                            key={photo} style={{ backgroundImage: `url(${photo})` }}>

                        </div>
                    ))
                }

            </div>


            {/* bottom div: github */}
            <div className="flex w-full h-1/10 bg-white/20 mt-1 rounded-b-xl px-5 backdrop-blur-xs">

                <div className="flex items-center justify-center w-1/2 h-full">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 opacity-60" onClick={() => { copyLink(project) }} >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
                    </svg>

                </div>

                <div className="flex items-center justify-start w-1/2 h-full" dir="ltr">

                    <Image src={"/icons/github.png"} alt="github" width={35} height={35} className="opacity-60" />

                    <a href={project.github} className="text-sm text-shadow-sm text-shadow-black text-white/70 ml-3"> https://github.com </a>
                </div>

            </div>

        </div>


    )
}