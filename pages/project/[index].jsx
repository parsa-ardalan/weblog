import { useRouter } from "next/router";
import Image from "next/image";

import Header from "../components/header/Header";

import Typewriter from 'typewriter-effect';

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";


export default function Project() {

    const router = useRouter();

    if (!router.isReady) return null;

    const project = router.query.data ? JSON.parse(router.query.data) : null;

    if (!project) return <p>Loading...</p>;

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

                    <Swiper spaceBetween={20} slidesPerView={2} loop={true}>

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

            </div>

        </div >

    )
}
