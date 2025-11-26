import { useRouter } from "next/router";
import Image from "next/image";

import Header from "../components/header/Header";

import Typewriter from 'typewriter-effect';

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { useState } from "react";


export default function Project() {

    const router = useRouter();

    if (!router.isReady) return null;

    const project = router.query.data ? JSON.parse(router.query.data) : null;

    if (!project) return <p>Loading...</p>;


    // icon function

    const clicked = () => {

        copied(
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"

                strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-700/70">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        );

        navigator.clipboard.writeText(project.link)
    }

    // icon 

    const [icon, copied] = useState(
        <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor"
            class="size-6 text-white/70" onClick={clicked}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
        </svg>
    )


    return (

        <div className="w-screen h-screen pt-10 px-5 md:px-20 overflow-hidden" dir="rtl">

            <Header />

            <div className="mt-16 w-full h-4/5 py-10 px-5">

                {/* name and info */}
                <div className="w-full h-2/6">

                    {/* name */}
                    <div className="w-full h-1/3 flex items-end">
                        <h1 className="text-2xl text-white/70"> {project.name} </h1>
                    </div>

                    {/* info */}
                    <div className="w-full h-2/3 flex items-start justify-start text-white/70 text-sm px-3 py-3">

                        <Typewriter
                            options={{
                                loop: false,
                                delay: 50,
                                cursor: '|',
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString(project.info).start();
                            }}
                        />

                    </div>

                </div>


                {/* photos of the project */}
                <div className="w-full h-3/6">

                    <Swiper spaceBetween={10} slidesPerView={2} loop={true}>

                        <SwiperSlide className="flex justify-center items-center py-5">

                            <Image
                                src={project.images[0]}
                                alt="slide3"
                                width={120}
                                height={100}
                                objectFit="contain"
                                className="rounded-md mx-auto"
                            />
                        </SwiperSlide>


                        <SwiperSlide className="flex justify-center items-center py-5">

                            <Image
                                src={project.images[1]}
                                alt="slide3"
                                width={120}
                                height={100}
                                objectFit="contain"
                                className="rounded-md mx-auto"
                            />
                        </SwiperSlide>

                        <SwiperSlide className="flex justify-center items-center py-5">

                            <Image
                                src={project.images[2]}
                                alt="slide3"
                                width={120}
                                height={100}
                                objectFit="contain"
                                className="rounded-md mx-auto"
                            />
                        </SwiperSlide>

                        <SwiperSlide className="flex justify-center items-center py-5">

                            <Image
                                src={project.images[3]}
                                alt="slide3"
                                width={120}
                                height={100}
                                objectFit="contain"
                                className="rounded-md mx-auto"
                            />
                        </SwiperSlide>

                    </Swiper>

                </div>

                {/* links and icons */}
                <div className="h-1/6 w-full flex">

                    {/* copy icon */}
                    <div className="w-1/3 h-full flex items-center justify-center">
                        {icon}
                    </div>

                    {/* github link and icon*/}
                    <div className="w-2/3 flex items-center justify-start pl-5" dir="ltr">

                        {/* github icon */}
                        <Image src={'/icons/libraries/white-github.png'} alt="github" width={50} height={50} className="opacity-70" />

                        {/* github link */}
                        <a className="text-white/70 truncate w-2/3 text-sm ml-3" href={project.link}> {project.link} </a>

                    </div>

                </div>

            </div>

        </div >

    )
}
