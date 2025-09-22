import Image from "next/image";
import Header from "../components/header/Header";

export default function Resume() {


    const mainSkills = [

        { name: "react", imageLink: "/icons/react.png" },
        { name: "redux", imageLink: "/icons/redux.png" },
        { name: "nextJS", imageLink: "/icons/next.png" }
    ];

    const otherSkills = [

        { name: "tailwind", imageLink: "/icons/tailwind.png" },
        { name: "bootstrap", imageLink: "/icons/bootstrap.png" },
        { name: "vite", imageLink: "/icons/vite.png" },
        { name: "javaScript", imageLink: "/icons/javaScript.png" },
        { name: "nodeJS", imageLink: "/icons/node.png" }
    ];

    return (

        <div className="w-screen h-screen pt-7" dir="rtl">

            <Header />

            <div className="container mx-auto grid grid-cols-1 gap-y-3 py-6 px-4 bg-black-10 backdrop-blur-xs border border-white rounded-xl w-3/4 h-3/5 mt-36 overflow-y-scroll">

                {/* text info and skills */}

                <div className="col-span-1 bg-white/10 rounded-2xl p-4">

                    <h1 className="text-xl text-white text-shadow-sm text-shadow-black"> مهارت های اصلی</h1>

                    <p dir="rtl" className="text-sm text-white/70 text-shadow-sm text-shadow-black mt-3 leading-8">

                        - پیاده سازی صفحات SSR

                        <br />
                        - معماری و چینش سایت Responsive

                        <br />
                        - استایل دهی المان با tailwind css و Scss

                        <br />
                        - مسلط به Rest PI و تعامل با سایر بخش ها   

                        <br /> 
                        - طراحی دیزاین مدرن و مسلط به مبانی UI / UX  
                    </p>
                </div>


                {/* tools and logos */}

                <div className="col-span-1 bg-white/10 rounded-2xl pb-4">


                    {/* top part */}

                    <div className="h-1/2 px-3 pt-4 py-4">

                        {/* other skills */}

                        <div className="grid grid-cols-3 h-full w-full gap-y-4" dir="ltr">

                            {otherSkills.map((item) => (

                                <div className="flex items-center justify-center">
                                    <Image src={item.imageLink} alt={item.name} width={30} height={30} />
                                </div>
                            ))}

                        </div>

                    </div>


                    {/* bottom part */}

                    <div className="h-1/2 px-4 pt-5">

                        {/* gray div */}

                        <div className="grid grid-cols-3 h-full w-full bg-black/40 rounded-xl" dir="ltr">

                            {mainSkills.map((item) => (

                                <div className="flex items-center justify-center">
                                    <Image src={item.imageLink} alt={item.name} width={50} height={50} />
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}