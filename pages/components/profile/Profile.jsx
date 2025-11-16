import Image from "next/image"
import data from "@/data/bio.json"
import Link from "next/link"

export default function Profile() {

    return (

        <div className="grid grid-cols-5 w-full h-1/6 mt-20">


            {/* image div */}
            <div className="col-span-2" dir="ltr">

                <Image width={100} height={100} id="profile-picture" src={"/images/personal/profile.jpg"} alt="profile image" />

            </div>


            {/* name , lastname */}
            <div className="col-span-3 pt-5 pr-7 ">

                <h1 className="text-white/70 w-full mt-1 text-2xl"> {data.personalInfo.name} </h1>
                <h1 className="text-white/70 w-full mt-1 text-sm"> {data.personalInfo.jobTitle} </h1>

            </div>

        </div>
    )
}