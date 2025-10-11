import Image from "next/image";

export default function Platform(props) {

    return (

        <div className="h-15 col-span-1 flex items-center justify-center bg-white/20 backdrop-blur-xs rounded-xl">
            <Image src={props?.image} width={40} height={40} alt={props?.name} />
        </div>
    )
}