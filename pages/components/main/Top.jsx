import Image from "next/image";
import profile from "@/public/images/personal/5857377017492784921.jpg"

import bio from "@/data/bio.json"

export default function Top() {

    return (

        <div className="grid grid-cols-3 gap-3 w-full h-2/6 pr-3">


            {/* right part */}

            <div className="col-span-1 flex items-center justify-center">

                <Image width={100} height={100} src={profile} className="rounded-full px-2 py-2" id="profile-picture" alt="profile" />

            </div>


            {/* left part */}

            <div className="col-span-2">

                {/* name  */}
                <div className="w-full h-1/2 flex items-end justify-right">

                    <h1 className="text-2xl text-black text-shadow-xs text-shadow-black/50">
                        {bio.personalInfo.firstName + " " + bio.personalInfo.lastName}
                    </h1>

                </div>

                {/* nickname */}

                <div className=" w-full h-1/2">

                    <h2 className="text-sm text-black text-shadow-xs text-shadow-black/50"> {bio.personalInfo.jobTitle} </h2>

                </div>

            </div>

        </div>
    )
}