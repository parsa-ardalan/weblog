import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Image from "next/image";

export default function Template() {

    const router = useRouter();
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {

        if (!router.isReady) return;

        setProjectData(router.query);
        console.log(router.query);
    }, [router.isReady, router.query]);

    if (!projectData) return null;

    const photos = [projectData.photo1, projectData.photo2, projectData.photo3, projectData.photo4];


    return (

        <div className="w-screen h-screen pt-7" dir="rtl">

            <Header />

            <div className="container mx-auto bg-black-10 backdrop-blur-xs border border-white rounded-xl w-3/4 h-3/5 mt-36 p-7">

                {/* name */}
                <div className="w-full h-1/6">
                    <h1 className="text-2xl text-white/70 text-shadow-sm text-shadow-black" dir="ltr"> {projectData.name} </h1>
                </div>

                {/* images */}

                <div className="grid grid-cols-4 w-full h-1/3F gap-3">

                    {
                        photos.map((image) => (

                            <Image src={image} alt="image" width={50} height={100} key={image} className="col-span-1 w-full rounded-md" />
                        ))
                    }

                </div>

                {/* link */}
                <div className="w-full h-1/4 py-7">

                    <p className="text-md text-white/70 text-shadow-sm text-shadow-black" dir="ltr">

                        github: <a href={projectData.github}> https://parsa-ardalan </a>

                    </p>

                </div>

            </div>

        </div>
    );
}
