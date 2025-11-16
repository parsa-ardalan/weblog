import Image from "next/image";

export default function Platform(props) {

    return (

        <div className="h-15 col-span-1 flex items-center justify-center bg-white/10 backdrop-blur-xs rounded-xl md:h-20 hover:-mt-2 duration-300">
            <Image src={props?.image} width={40} height={40} alt={props?.name} className="md:w-12 hover:w-14 duration-300"/>
        </div>
    )
}