import Image from "next/image";

export default function Skill(props) {

    return (

        <div className="col-span-3 bg-white/20 rounded-xl">

            {/* skill name */}
            <div className="h-1/2 w-full pt-4">
                {/* <h1 className="text-lg text-white/70 text-center text-shadow-sm text-shadow-black">{props.name}</h1> */}
            </div>

            {/* skill icon */}
            <div className="flex items-center justify-center h-1/2 w-full">
                <Image width={65} height={65} alt="icon" src={props.icon} />
            </div>

        </div>

    )
}