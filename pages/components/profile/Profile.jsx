import profile from "@/public/images/personal/profile.jpg"
import Image from "next/image"
import data from "@/data/bio.json"
import Link from "next/link"

export default function Profile() {

    return (

        < div className="w-1/2 h-full bg-white/20 pt-8 rounded-xl backdrop-blur-xs md:w-1/4 md:pt-10" >

            {/* profile photo */}
            <div className="h-auto w-full flex items-center justify-center">
                <Image
                    src={profile}
                    alt="profile"
                    width={150}
                    height={150}
                    className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] hover:w-[165px] hover:h-[165px] duration-700 hover:cursor-none"
                    id="profile-picture"
                />
            </div>

            <h1 className="text-xl text-white/70 text-center text-shadow-sm text-shadow-black mt-4 md:text-2xl md:mt-7"> {data.personalInfo.name} </h1>
            <h2 className="text-sm text-white/70 text-center text-shadow-sm text-shadow-black mt-2 md:text-lg md:mt-4"> {data.personalInfo.jobTitle} </h2>

            <hr className="text-white/70 w-4/5 mx-auto mt-5 text-shadow-sm text-shadow-black" />

            <div className="grid grid-cols-2 w-full h-1/4 px-5 opacity-50 md:px-10">

                <a href={"https://linkedin.com/in/parsa-ardalan-b2678735b"} className="col-span-1 flex items-center justify-center duration-200 hover:-mt-2">
                    <Image src={"/icons/linkedIn.png"} alt="linkedIn" width={35} height={35} className="md:w-12" />
                </a>

                <a href="https://github.com/parsa-ardalan" className="col-span-1 flex items-center justify-center duration-200 hover:-mt-2">
                    <Image src={"/icons/github.png"} alt="github" width={35} height={35} className="md:w-12" />
                </a>

            </div>

        </div>
    )
}