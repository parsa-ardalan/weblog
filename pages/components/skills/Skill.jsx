import Image from "next/image";

export default function Skill(props) {

    return (

        <div className="col-span-3 bg-white/10 rounded-xl backdrop-blur-xs md:py-2">

          
            <div className="h-1/2 w-full pt-4">
                <h1 className="text-md text-white/70 text-center text-shadow-sm text-shadow-black md:text-xl">{props.name}</h1>
            </div>

           
            <div className="flex items-center justify-center h-1/2 w-full">
                <Image width={50} height={50} alt="icon" src={props.icon} className="lg:w-[75px]" />
            </div> 

        </div>

    )
}