import Skill from "./Skill";


export default function Skills() {

    const skills = [
        { id: 0, name: "واکنش گرا", image: "/icons/responsive.png" },
        { id: 1, name: "SSR سیستم", image: "/icons/ssr.png" },
        { id: 2, name: "طراحی مدرن", image: "/icons/webIcon.png" }
    ];

    return (

        // <div className="col-span-1 rounded-2xl p-4">

        //     <h1 className="text-xl text-white text-shadow-sm text-shadow-black"> مهارت های اصلی </h1>

        //     <p dir="rtl" className="text-sm text-white/70 text-shadow-sm text-shadow-black mt-3 leading-8">

        //         - پیاده سازی صفحات SSR

        //         <br />
        //         - معماری و چینش سایت Responsive

        //         <br />
        //         - استایل دهی با tailwind css و Scss

        //         <br />
        //         - مسلط به Rest PI
        //     </p>
        // </div>


        <div className="grid grid-cols-3 gap-3 w-1/2 h-ful p-4">

            {
                skills.map((item) =>

                    <Skill key={item.id} name={item.name} icon={item.image} />
                )
            }

        </div>
    )
}