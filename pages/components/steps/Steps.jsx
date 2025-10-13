import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

export default function Steps() {

    return (

        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#ffffff',
                    '--swiper-pagination-color': '0000',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper text-white mt-5"
                dir='rtl'
            >


                <SwiperSlide className='mt-5 px-15'>

                    <div className="title" data-swiper-parallax="-300">
                        <h1 className='text-xl text-white/70 text-shadow-sm text-shadow-black'> قدم اول </h1>
                    </div>

                    <div className="text" data-swiper-parallax="-100">

                        <p className={"mt-3 text-sm text-white/70 text-shadow-sm text-shadow-black"}>


                            پس از درخواست سفارش از طریق پلتفرم های اجتماعی یا تماس، شرایط ثبت قرارداد برای شما ارسال می شود.
                            در صورت تایید، جلسه ای حضوری جهت توضیحات تکمیلی پروژه برگزار می شود.

                        </p>
                    </div>

                </SwiperSlide>

                <SwiperSlide className='mt-5 px-15'>
                    <div className="title" data-swiper-parallax="-300">
                        <h1 className='text-xl text-white/70 text-shadow-sm text-shadow-black'> قدم دوم </h1>
                    </div>

                    <div className="text" data-swiper-parallax="-100">
                        <p className={"mt-3 text-sm text-white/70 text-shadow-sm text-shadow-black"}>


                            پس از برگزاری جلسه و صحبت درباره جزئیات پروژه مربوطه، مراحل پیش رو به کارفرما اطلاع داده می شود.
                            سپس، در صورت توافق طرفین، قراردادی مبنی بر زمان تحویل پروژه، قیمت و نکات ذکر شده نوشته می شود.
                        </p>
                    </div>

                </SwiperSlide>

                <SwiperSlide className='mt-5 px-15'>

                    <div className="title" data-swiper-parallax="-300">
                        <h1 className='text-xl text-white/70 text-shadow-sm text-shadow-black'> قدم نهایی </h1>
                    </div>

                    <div className="text" data-swiper-parallax="-100">
                        <p className={"mt-3 text-sm text-white/70 text-shadow-sm text-shadow-black"}>

                            در نهایت، پروژه شما با کیفیت تضمینی و تمام و کمال همراه با سه ماه پشتیبانی رایگان، در تاریخ ذکرشده تقدیمتان می گرد.
                        </p>
                    </div>
                    
                </SwiperSlide>

            </Swiper>
        </>
    );
}
