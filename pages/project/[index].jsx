import { useRouter } from "next/router"
import Header from "../components/header/Header";
import Image from "next/image";

export default function Project() {

    // get data from router
    const router = useRouter();

    const project = {

        name: router.query.pname,
        photos: router.query.photos,
        github: router.query.link
    }

    const projectPhotos = project.photos;

    if (!router.isReady) return null;

    console.log(projectPhotos);


    return (

        <div className="w-screen h-screen pt-10 px-5" dir="rtl">

            <Header />

            {/* top part: including name, info and photos */}
            <div className="grid grid-cols-2 w-full h-1/2 mt-10 px-5 bg-white/20 rounded-t-xl backdrop-blur-xs">

                {/* name and info */}
                <div className="col-span-2 h-auto pt-10">

                    <h1 className="text-xl text-white/70 text-shadow-sm text-shadow-black"> {project.name} </h1>

                    <p className="text-sm text-shadow-sm text-white/70 text-shadow-black w-3/4 h-auto pr-1 mt-2" dir="rtl">
                        Lorem ipsum dolor sit amet it le consectetur adipisicing
                    </p>

                </div>


                {/* photos of the project */}

                <div className="col-span-2 grid grid-cols-4 gap-3 pb-3">

                    {
                        projectPhotos.map((photo) => (

                            <div className="project-image col-span-1 bg-white/20 border rounded-sm"
                                key={photo} style={{ backgroundImage: `url(${photo})` }}>

                            </div>
                        ))
                    }

                </div>



            </div>

            {/* bottom part: including github link and copy button */}
            <div className="flex w-full h-1/10 bg-white/20 mt-1 rounded-b-xl px-5 backdrop-blur-xs">

                <div className="flex items-center justify-center w-1/2 h-full">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 opacity-60">
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