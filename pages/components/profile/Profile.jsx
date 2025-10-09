import profile from "@/public/images/personal/profile.jpg"
import Image from "next/image"
import data from "@/data/bio.json"

export default function Profile() {

    return (

        < div className="w-1/2 h-full bg-white/30 pt-8 rounded-xl" >

            {/* profile photo */}
            <div className="h-auto w-full flex items-center justify-center">
                <Image src={profile} alt="profile" width={100} height={100} id="profile-picture" />
            </div>

            <h1 className="text-lg text-white/70 text-center text-shadow-sm text-shadow-black mt-4"> {data.personalInfo.name} </h1>
            <h2 className="text-md text-white/70 text-center text-shadow-sm text-shadow-black mt-2"> {data.personalInfo.jobTitle} </h2>

            {/* _____________________ */}
            <div className="flex justify-center">
                <hr className="text-black mt-5 w-4/5 text-center" />
            </div>

            {/* info */}
            <div className="w-4/5 h-2/6 mx-auto mt-3">

                <p className="text-sm text-white/70 text-right text-shadow-sm text-shadow-black">
                    دارای مدرک تخصصی کامپیوتر و برنامه نویسی(CS50x) از دانشگاه عالی رتبه هاروارد.
                </p>

                <p className="text-sm text-white/70 text-right text-shadow-sm text-shadow-black">
                    سه سال تجربه برنامه نویسی صفحات مدرن و واکنش گرا.
                </p>

            </div>

        </div >
    )
}