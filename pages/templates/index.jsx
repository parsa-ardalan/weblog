import Image from "next/image";
import Header from "../components/header/Header";
import Data from "@/data/projects.json"
import Link from "next/link";

export default function Templates() {

    return (

        <div className="w-screen h-screen pt-7" dir="rtl">

            <Header />

            <div className="container mx-auto bg-black-10 backdrop-blur-xs border border-white rounded-xl w-3/4 h-3/5 mt-36 py-20 px-10">

                <div className="w-full h-full grid grid-cols-2 gap-4">

                    {
                        Data.map((item) => (

                            <Link
                                href={{
                                    pathname: `/template/${item.id}`,
                                    query: {
                                        name: item.name,
                                        github: item.github,
                                        photo: item.photo,
                                        photo1: item.photo1,
                                        photo2: item.photo2,
                                        photo3: item.photo3,
                                        photo4: item.photo4
                                    }
                                }}
                                className="col-span-1 w-full"
                                key={item.name}
                            >

                                {/* image */}
                                <div className="w-full h-1/2 flex items-center justify-center opacity-50">
                                    <Image src={item.photo} width={80} height={0} alt="image" className="rounded-md" />
                                </div>

                                {/* name */}
                                <div className="w-full h-1/2 flex items-start justify-center py-2">
                                    <h1 className="text-sm text-white/70 text-shadow-sm text-shadow-black"> {item.name} </h1>
                                </div>

                            </Link>
                        ))
                    }

                </div>

            </div>

        </div >
    )
}