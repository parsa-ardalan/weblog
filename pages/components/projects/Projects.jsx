import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';

// swiper import files
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import projects from "@/data/projects.json"

// notyf library
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

export default function Projects() {

    // copy fonction
    const copy = (index) => {

        const url = `${window.location.origin}/project/${index.name}`;
        navigator.clipboard.writeText(url);

        const notyf = new Notyf();

        notyf.success("copied")
    }

    // share tab opening function
    const share = () => {

        if (navigator.share) {

            navigator.share({

                title: "project shares to...",
                text: "you are sharing the project with someone you'd choose.",
                url: location.href
            })
                .then(() => console.log("share tab opened"))
                .catch((error) => console.log("Error sharing:", error));
        } else {
            console.log("browser doesn't support this option")
        }
    };


    const [slide, setSlide] = useState(3);

    useEffect(() => {

        const handleResize = () => {

            if (window.innerWidth >= 768) setSlide(5);
            else setSlide(3);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (

        <>
            <Swiper
                slidesPerView={slide}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                className="w-full h-full"
            >

                {
                    projects.map((project) => (

                        <SwiperSlide
                            className='bg-white/10 rounded-t-xl'
                            style={{
                                backgroundImage: `url(${project.photo1})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}>

                            {/* container div */}
                            <div className='w-full h-full bg-black/50 backdrop-blur-xs rounded-t-xl'>

                                {/* top part: including name and icons */}
                                <div className="h-2/3 w-full">

                                    {/* top part: icons */}
                                    <div className="flex w-full text-white/70 h-1/2 px-3">

                                        {/* share icon */}
                                        <div className="w-1/2 h-full flex items-center justify-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-5" onClick={share}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                            </svg>
                                        </div>

                                        {/* copy icon */}
                                        <div className="w-1/2 h-full flex items-center justify-end">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-5" onClick={() => { copy(project) }}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
                                            </svg>
                                        </div>
                                    </div>

                                    <h1 className='text-center text-sm text-white/70 text-shadow text-shadow-sm text-shadow-black mt-3 md:text-xl md:mt-0'> {project.name} </h1>
                                </div>

                                {/* bottom part: darker and green link */}
                                <div className="flex items-center justify-center h-1/3 w-full bg-black/40 rounded-t-lg">

                                    <Link className='text-sm text-green-700 text-shadow-sm text-shadow-black/40 md:text-lg'

                                        href={{
                                            pathname: `/project/${project.name}`,
                                            query: {
                                                pname: project.name,
                                                photos: [project.photo1, project.photo2, project.photo3, project.photo4],
                                                link: project.github,
                                                info: project.info
                                            }
                                        }}
                                    > مشاهده پروژه </Link>

                                </div>

                            </div>

                        </SwiperSlide>

                    ))
                }

            </Swiper>
        </>

    );
}
