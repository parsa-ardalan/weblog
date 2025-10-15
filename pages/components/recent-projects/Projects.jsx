import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import projects' data
import projects from "@/data/projects.json"
import Image from 'next/image';

export default function RecentProjects() {

    return (

        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay]}
            className="mySwiper w-full h-1/2 mt-6"
        >

            {
                projects.map((project) => (


                    <SwiperSlide className='w-full h-full'>

                        <div className='text-center text-white w-full h-full bg-white/20 backdrop-blur-xs rounded-xl' dir='ltr'>

                            <div className="h-1/2 w-full flex items-center justify-end px-5">
                                <h1 className='text-white/70 text-shadow-sm text-shadow-black text-xl'> {project.name} </h1>
                            </div>

                            <hr className='flex text-white/70 w-4/5 mx-auto' />

                            <div className="h-1/2 w-full flex">

                                <div className="h-full w-1/2 flex items-center justify-end pl-5" dir='rtl'>
                                    <h1 className='text-lg text-green-700 text-shadow-sm text-shadow-black/40'> مشاهده پروژه </h1>
                                </div>

                                {/* photos */}
                                <div className="w-1/2 h-full flex items-center justify-center">
                                    <Image src={project.photo1} width={25} height={50} alt='photo' className='border border-white/30 rounded-sm -ml-2' />
                                    <Image src={project.photo2} width={25} height={50} alt='photo' className='border border-white/30 rounded-sm -ml-2' />
                                    <Image src={project.photo3} width={25} height={50} alt='photo' className='border border-white/30 rounded-sm -ml-2' />
                                    <Image src={project.photo4} width={25} height={50} alt='photo' className='border border-white/30 rounded-sm -ml-2' />
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>
                ))
            }


        </Swiper>
    );
}
