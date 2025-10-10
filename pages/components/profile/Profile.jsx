import profile from "@/public/images/personal/profile.jpg"
import Image from "next/image"
import data from "@/data/bio.json"
import Link from "next/link"

export default function Profile() {

    return (

        < div className="w-1/2 h-full bg-white/20 pt-8 rounded-xl backdrop-blur-xs" >

            {/* profile photo */}
            <div className="h-auto w-full flex items-center justify-center">
                <Image src={profile} alt="profile" width={100} height={100} id="profile-picture" />
            </div>

            <h1 className="text-xl text-white/70 text-center text-shadow-sm text-shadow-black mt-4"> {data.personalInfo.name} </h1>
            <h2 className="text-sm text-white/70 text-center text-shadow-sm text-shadow-black mt-2"> {data.personalInfo.jobTitle} </h2>

            <hr className="text-white/70 w-4/5 mx-auto mt-5" />

            <div className="flex items-center w-full h-1/4 pr-5">
                <Link href={"3"} className="text-lg text-green-700/70 text-shadow-sm text-shadow-black/60"> مشاهد رزومه... </Link>
            </div>

        </div>
    )
}